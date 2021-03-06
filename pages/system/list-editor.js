import * as React from "react";
import * as System from "~/components/system";
import * as Constants from "~/common/constants";

import moment from "moment";

import Group from "~/components/system/Group";
import SystemPage from "~/components/system/SystemPage";
import ViewSourceLink from "~/components/system/ViewSourceLink";

export default class SystemPageListEditor extends React.Component {
  state = {
    flavors: [
      "Chocolate",
      "Vanilla",
      "Mint Chip",
      "Pistachio",
      "Neapolitan",
      "Toffee",
      "Rocky Road",
    ],
  };

  _handleListChange = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SystemPage
        title="SDS: List Editor"
        description="..."
        url="https://fps.onrender.com/system/list-editor"
      >
        <System.H1>
          List Editor <ViewSourceLink file="system/listeditor.js" />
        </System.H1>
        <br />
        <br />
        <System.P>
          The List Editor component allows the user to add to, delete from, and
          reorder a list of strings.
        </System.P>
        <br />
        <br />
        <br />
        <System.H2>Imports</System.H2>
        <hr />
        <br />
        <System.P>Import React and the ListEditor Component.</System.P>
        <br />
        <br />
        <System.CodeBlock>
          {`import * as React from 'react';
import { ListEditor } from 'slate-react-system';`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>List Editor</System.H2>
        <hr />
        <br />
        <System.ListEditor
          name="flavors"
          options={this.state.flavors}
          onChange={this._handleListChange}
        />
        <br />
        <System.P>
          Define the List Editor component. Note that the _handleListChange
          takes a different shape than the other onChange functions in this
          design system.
        </System.P>
        <br />
        <System.CodeBlock>
          {`class ExampleOne extends React.Component {
  state = { 
    flavors: [
      "Chocolate", 
      "Vanilla", 
      "Mint Chip", 
      "Pistachio", 
      "Neapolitan", 
      "Toffee", 
      "Rocky Road"
    ] 
  }

  _handleListChange = ({ name, value }) => {
    this.setState({ [name]: value });
  };

  render() {
    return(
      <ListEditor
        name="flavors"
        options={this.state.flavors}
        onChange={this._handleListChange}
      />
    )
  }
}`}
        </System.CodeBlock>
        <br />
        <br />
        <br />
        <System.H2>Accepted React Properties</System.H2>
        <hr />
        <br />
        <Group title="List Editor">
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
                  id: 6,
                  a: (
                    <span style={{ fontFamily: Constants.font.semiBold }}>
                      options
                    </span>
                  ),
                  b: <System.CodeText nowrap>Array</System.CodeText>,
                  c: "null",
                  d:
                    "Values to choose from and reorder. Can be used to specify the default value. An array of strings.",
                },
                {
                  id: 2,
                  a: "name",
                  b: <System.CodeText nowrap>string</System.CodeText>,
                  c: "null",
                  d: "Input name",
                },
                {
                  id: 3,
                  a: "label",
                  b: <System.CodeText nowrap>string</System.CodeText>,
                  c: "null",
                  d: "Label text",
                },
                {
                  id: 4,
                  a: "description",
                  b: <System.CodeText nowrap>string</System.CodeText>,
                  c: "null",
                  d: "Description text",
                },
                {
                  id: 5,
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
