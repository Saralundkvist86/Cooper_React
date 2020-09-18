import React from "react";
import { Table } from "semantic-ui-react";

export const MaleTable = () => {
  return (
    <>
      <Table celled color="green" id="result-table">
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
            <Table.Cell>above 2700</Table.Cell>
            <Table.Cell>2400-2699</Table.Cell>
            <Table.Cell>2200-2399</Table.Cell>
            <Table.Cell>2100-2199</Table.Cell>
            <Table.Cell>below 2100</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>15-16</Table.Cell>
            <Table.Cell>above 2800</Table.Cell>
            <Table.Cell>2500-2799</Table.Cell>
            <Table.Cell>2300-2499</Table.Cell>
            <Table.Cell>2200-2299</Table.Cell>
            <Table.Cell>below 2200</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>17-19</Table.Cell>
            <Table.Cell>above 3000</Table.Cell>
            <Table.Cell>2700-2999</Table.Cell>
            <Table.Cell>2500-2699</Table.Cell>
            <Table.Cell>2300-2499</Table.Cell>
            <Table.Cell>below 2300</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>20-29</Table.Cell>
            <Table.Cell>above 2800</Table.Cell>
            <Table.Cell>2400-2799</Table.Cell>
            <Table.Cell>2200-2399</Table.Cell>
            <Table.Cell>1600-2199</Table.Cell>
            <Table.Cell>below 1600</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>30-39</Table.Cell>
            <Table.Cell>above 2700</Table.Cell>
            <Table.Cell>2300-2699</Table.Cell>
            <Table.Cell>1900-2299</Table.Cell>
            <Table.Cell>1500-1999</Table.Cell>
            <Table.Cell>below 1500</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>40-49</Table.Cell>
            <Table.Cell>above 2500</Table.Cell>
            <Table.Cell>2100-2499</Table.Cell>
            <Table.Cell>1700-2099</Table.Cell>
            <Table.Cell>1400-1699</Table.Cell>
            <Table.Cell>below 1400</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>50+</Table.Cell>
            <Table.Cell>above 2400</Table.Cell>
            <Table.Cell>2000-2399</Table.Cell>
            <Table.Cell>1600-1999</Table.Cell>
            <Table.Cell>1300-1599</Table.Cell>
            <Table.Cell>below 1300</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};
export default MaleTable;
