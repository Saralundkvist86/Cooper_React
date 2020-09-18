import React, { Component } from "react";
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import { authenticate } from "./modules/auth";
import DisplayPerformanceData from "./components/DisplayPerformanceData";
import { Grid, Image, Header, Container, Button } from "semantic-ui-react";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false,
  };
  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  render() {
    let performanceDataIndex;
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <Button
              color="green"
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </Button>
            <p id="message">{message}</p>
          </>
        );
        break;

      case authenticated:
        renderLogin = (
          <p id="message">
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}
          </p>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <Button
                basic
                color="black"
                onClick={() => this.setState({ renderIndex: false })}
              >
                Hide past entries
              </Button>
            </>
          );
        } else {
          performanceDataIndex = (
            <Button
              basic
              color="black"
              id="show-index"
              onClick={() => this.setState({ renderIndex: true })}
            >
              Show past entries
            </Button>
          );
        }
        break;
      default:
        break;
    }
    return (
      <>
        <Header size="huge">Cooper Log</Header>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Image src="./runner.jpg" padded />
              </Grid.Column>
              <Grid.Column width={6}>
                <p class="large text">
                  Keep track of your Cooper Results with Cooper Log.
                </p>
                <p>
                  Log in to save your result so that you can keep track of your
                  development{" "}
                </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column width={8}>
                <InputFields onChangeHandler={this.onChangeHandler} />
                {renderLogin}

                <DisplayCooperResult
                  distance={this.state.distance}
                  gender={this.state.gender}
                  age={this.state.age}
                  authenticated={this.state.authenticated}
                  entrySaved={this.state.entrySaved}
                  entryHandler={() =>
                    this.setState({ entrySaved: true, updateIndex: true })
                  }
                />
                {performanceDataIndex}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;
