import * as React from "react";
import * as System from "~/components/system";
import Group from "~/components/system/Group";
import * as Constants from "~/common/constants";

import SystemPage from "~/components/system/SystemPage";
import ViewSourceLink from "~/components/system/ViewSourceLink";

const TAB_GROUP_TWO = [
  { value: "1", label: "Capricorn" },
  { value: "2", label: "Aquarius" },
];

const TAB_GROUP_FOUR = [
  { value: "1", label: "Capricorn" },
  { value: "2", label: "Aquarius" },
  { value: "3", label: "Pisces" },
  { value: "4", label: "Aries" },
];

export default class SystemPageCardTabs extends React.Component {
  state = {
    exampleOne: "1",
    exampleTwo: "4",
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SystemPage
        title="SDS: Card Tabs"
        description="..."
        url="https://fps.onrender.com/system/card-tabs"
      >
        <System.H1>
          Card Tabs <ViewSourceLink file="system/card-tabs.js" />
        </System.H1>
        <br />
        <br />
        <System.P>
          The CardTabGroup component is used to allow the users to switch
          between views.
        </System.P>
        <br />
        <br />
        <br />
        <System.H2>Imports</System.H2>
        <hr />
        <br />
        <System.P>Import React and the CardTabGroup Component.</System.P>
        <br />
        <br />
        <System.CodeBlock>
          {`import * as React from 'react';
import { CardTabGroup } from 'slate-react-system';`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>Usage</System.H2>
        <hr />
        <br />
        <System.P>Define the tab group values and labels.</System.P>
        <br />
        <System.CodeBlock>
          {`const TAB_GROUP_TWO = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
];

const TAB_GROUP_FOUR = [
  { value: '1', label: 'Capricorn' },
  { value: '2', label: 'Aquarius' },
  { value: '3', label: 'Pisces' },
  { value: '4', label: 'Aries' },
];`}
        </System.CodeBlock>
        <br />
        <System.P>Declare the CardTabGroup component.</System.P>
        <br />
        <System.CodeBlock>
          {`class ExampleOne extends React.Component {
   state = { exampleOne: '1' }

   _handleChange = e => this.setState(
     { [e.target.name]: e.target.value }
   );

   render() {
       return(
         <CardTabGroup
           name="exampleOne"
           options={TAB_GROUP_TWO}
           value={this.state.exampleOne}
           onChange={this._handleChange}
         />
       )
   }
}

class ExampleTwo extends React.Component {
   state = { exampleTwo: '4' }

   _handleChange = e => this.setState(
     { [e.target.name]: e.target.value }
   );

   render() {
       return(
         <CardTabGroup
           name="exampleTwo"
           options={TAB_GROUP_FOUR}
           value={this.state.exampleTwo}
           onChange={this._handleChange}
         />
       )
   }
}`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>Output</System.H2>
        <hr />
        <br />
        <System.CardTabGroup
          name="exampleOne"
          options={TAB_GROUP_TWO}
          value={this.state.exampleOne}
          onChange={this._handleChange}
        />
        <br />
        <br />
        <System.CardTabGroup
          name="exampleTwo"
          options={TAB_GROUP_FOUR}
          value={this.state.exampleTwo}
          onChange={this._handleChange}
        />
        <br />
        <br />
        <br />
        <System.H2>Accepted React Properties</System.H2>
        <hr />
        <br />
        <Group title="Card Tabs">
          <System.Table
            data={{
              columns: [
                { key: "a", name: "Name", width: "128px" },
                { key: "b", name: "Type", width: "88px" },
                { key: "c", name: "Default", width: "88px" },
                { key: "d", name: "Description", width: "100%" },
              ],
              rows: [
                {
                  id: 1,
                  a: (
                    <span style={{ fontFamily: Constants.font.semiBold }}>
                      onChange
                    </span>
                  ),
                  b: <System.CodeText nowrap>function</System.CodeText>,
                  c: "null",
                  d: "Function called upon an onChange event",
                },
                {
                  id: 2,
                  a: (
                    <span style={{ fontFamily: Constants.font.semiBold }}>
                      value
                    </span>
                  ),
                  b: <System.CodeText nowrap>boolean</System.CodeText>,
                  c: "false",
                  d:
                    "The value that is currently selected. Can be used to assign default values as well",
                },
                {
                  id: 3,
                  a: (
                    <span style={{ fontFamily: Constants.font.semiBold }}>
                      options
                    </span>
                  ),
                  b: <System.CodeText nowrap>Array</System.CodeText>,
                  c: "[]",
                  d:
                    "An array of options, each of which has a value and a label",
                },
                {
                  id: 4,
                  a: "name",
                  b: <System.CodeText nowrap>string</System.CodeText>,
                  c: "null",
                  d: "Input name",
                },
              ],
            }}
          />
        </Group>
      </SystemPage>
    );
  }
}
