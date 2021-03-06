import * as React from "react";
import * as System from "~/components/system";
import Group from "~/components/system/Group";
import * as Constants from "~/common/constants";

import SystemPage from "~/components/system/SystemPage";
import ViewSourceLink from "~/components/system/ViewSourceLink";

export default class SystemPageCheckboxes extends React.Component {
  state = {
    exampleOne: false,
    exampleTwo: true,
  };

  _handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <SystemPage
        title="SDS: Checkboxes"
        description="..."
        url="https://fps.onrender.com/system/checkboxes"
      >
        <System.H1>
          Checkboxes <ViewSourceLink file="system/checkboxes.js" />
        </System.H1>
        <br />
        <br />
        <System.P>
          The Checkbox component is used in forms when a users needs to select a
          true or false value.
        </System.P>
        <br />
        <br />
        <br />
        <System.H2>Imports</System.H2>
        <hr />
        <br />
        <System.P>Import React and the CheckBox Component.</System.P>
        <br />
        <br />
        <System.CodeBlock>
          {`import * as React from 'react';
import { CheckBox } from 'slate-react-system';`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>Usage</System.H2>
        <hr />
        <br />
        <System.P>
          Declare the CheckBox component. Any children will be rendered as the
          label to the right of the checkbox.
        </System.P>
        <br />

        <System.CodeBlock>
          {`class ExampleOne extends React.Component {
   state = { exampleOne: false }

   _handleChange = e => this.setState(
     { [e.target.name]: e.target.value }
   );

   render() {
       return(
           <CheckBox
             name="exampleOne"
             value={this.state.exampleOne}
             onChange={this._handleChange}>

             <strong>Unchecked</strong>
             <br />
             This CheckBox default is unchecked.
           </CheckBox>
        )
    }
}


class ExampleTwo extends React.Component {
   state = { ExampleTwo: true }

   _handleChange = e => this.setState(
     { [e.target.name]: e.target.value }
   );

   render() {
       return(
         <CheckBox
           name="ExampleTwo"
           value={this.state.ExampleTwo}
           onChange={this._handleChange}>

           <strong>Checked</strong>
           <br />
           This CheckBox default is checked.
         </CheckBox>
       )
   }
}`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>Output</System.H2>
        <hr />
        <br />
        <System.CheckBox
          name="exampleOne"
          value={this.state.exampleOne}
          onChange={this._handleChange}
        >
          <strong>Unchecked</strong>
          <br />
          This CheckBox default is unchecked.
        </System.CheckBox>
        <br />
        <br />
        <System.CheckBox
          name="exampleTwo"
          value={this.state.exampleTwo}
          onChange={this._handleChange}
        >
          <strong>Checked</strong>
          <br />
          This CheckBox default is checked.
        </System.CheckBox>
        <br />
        <br />
        <br />
        <System.H2>Accepted React Properties</System.H2>
        <hr />
        <br />
        <Group title="Checkboxes">
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
                    "The value of the checkbox. Can be used to assign default values as well",
                },
                {
                  id: 3,
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
