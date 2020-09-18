import React from "react";
import { Table } from "semantic-ui-react";

export const FemaleTable = () => {
  return (
    <>
      <Table celled color="green">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Age</Table.HeaderCell>
          
            <Table.HeaderCell>Excellent</Table.HeaderCell>
            <Table.HeaderCell>Above Average</Table.HeaderCell>
            <Table.HeaderCell>Average</Table.HeaderCell>
            <Table.HeaderCell>Below Average</Table.HeaderCell>
            <Table.HeaderCell>Poor</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>13-14</Table.Cell>
            <Table.Cell>above 2000</Table.Cell>
            <Table.Cell>1900-1999</Table.Cell>
            <Table.Cell>1600-1899</Table.Cell>
            <Table.Cell>1500-1599</Table.Cell>
            <Table.Cell>below 1500</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>15-16</Table.Cell>
            <Table.Cell>above 2100</Table.Cell>
            <Table.Cell>2000-2099</Table.Cell>
            <Table.Cell>1700-1999</Table.Cell>
            <Table.Cell>1600-1699</Table.Cell>
            <Table.Cell>below 1600</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>17-19</Table.Cell>
            <Table.Cell>above 2300</Table.Cell>
            <Table.Cell>2100-2299</Table.Cell>
            <Table.Cell>1800-2099</Table.Cell>
            <Table.Cell>1700-1799</Table.Cell>
            <Table.Cell>below 1700</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>20-29</Table.Cell>
            <Table.Cell>above 2700</Table.Cell>
            <Table.Cell>2200-2699</Table.Cell>
            <Table.Cell>1800-2199</Table.Cell>
            <Table.Cell>1500-1799</Table.Cell>
            <Table.Cell>below 1500</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>30-39</Table.Cell>
            <Table.Cell>above 2500</Table.Cell>
            <Table.Cell>2000-2499</Table.Cell>
            <Table.Cell>1700-1999</Table.Cell>
            <Table.Cell>1400-1699</Table.Cell>
            <Table.Cell>below 1400</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>40-49</Table.Cell>
            <Table.Cell>above 2300</Table.Cell>
            <Table.Cell>1900-2299</Table.Cell>
            <Table.Cell>1500-1899</Table.Cell>
            <Table.Cell>1200-1499</Table.Cell>
            <Table.Cell>below 1200</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>50+</Table.Cell>
            <Table.Cell>above 2200</Table.Cell>
            <Table.Cell>1700-2199</Table.Cell>
            <Table.Cell>1400-1699</Table.Cell>
            <Table.Cell>1100-1399</Table.Cell>
            <Table.Cell>below 1100</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};
export default FemaleTable

