import * as React from "react";
import * as System from "~/components/system";
import * as Constants from "~/common/constants";

import Group from "~/components/system/Group";
import SystemPage from "~/components/system/SystemPage";
import ViewSourceLink from "~/components/system/ViewSourceLink";

export default class SystemPageToggles extends React.Component {
  state = {
    three: true,
    four: false,
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SystemPage
        title="SDS: Toggles"
        description="..."
        url="https://fps.onrender.com/system/toggles"
      >
        <System.H1>
          Toggles <ViewSourceLink file="system/toggles.js" />
        </System.H1>
        <br />
        <br />
        <System.P>
          The Toggle component is used to switch between two states.
        </System.P>
        <br />
        <br />
        <br />
        <System.H2>Imports</System.H2>
        <hr />
        <br />
        <System.P>Import React and the Toggle Component.</System.P>
        <br />
        <br />
        <System.CodeBlock>
          {`import * as React from 'react';
import { Toggle } from 'slate-react-system';`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>Usage</System.H2>
        <hr />
        <br />
        <System.P>Declare the Toggle component.</System.P>
        <br />
        <System.CodeBlock>
          {`class ExampleOne extends React.Component {
   state = { exampleOne: true }

   _handleChange = e => this.setState(
     { [e.target.name]: e.target.value }
   );

   render() {
       return(
         <Toggle
           active={this.state.exampleOne}
           name="exampleOne"
           onChange={this._handleChange}
         />
       )
   }
}


class ExampleTwo extends React.Component {
   state = { exampleTwo: false }

   _handleChange = e => this.setState(
     { [e.target.name]: e.target.value }
   );

   render() {
       return(
         <Toggle
           active={this.state.exampleTwo}
           name="exampleTwo"
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
        <System.Toggle
          active={this.state.three}
          name="three"
          onChange={this._handleChange}
        />
        <br />
        <br />
        <System.Toggle
          active={this.state.four}
          name="four"
          onChange={this._handleChange}
        />
        <br />
        <br />
        <br />
        <System.H2>Accepted React Properties</System.H2>
        <hr />
        <br />
        <Group title="Toggles">
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
                      active
                    </span>
                  ),
                  b: <System.CodeText nowrap>boolean</System.CodeText>,
                  c: "false",
                  d:
                    "The value that the dropdown takes. Can be used to assign default values as well.",
                },
                {
                  id: 3,
                  a: "name",
                  b: <System.CodeText nowrap>string</System.CodeText>,
                  c: "null",
                  d: "Input name",
                },
                {
                  id: 4,
                  a: "label",
                  b: <System.CodeText nowrap>string</System.CodeText>,
                  c: "null",
                  d: "Label text",
                },
                {
                  id: 5,
                  a: "description",
                  b: <System.CodeText nowrap>string</System.CodeText>,
                  c: "null",
                  d: "Description text",
                },
                {
                  id: 6,
                  a: "tooltip",
                  b: <System.CodeText nowrap>string</System.CodeText>,
                  c: "null",
                  d: "Tooltip text",
                },
              ],
            }}
          />
        </Group>
      </SystemPage>
    );
  }
}
