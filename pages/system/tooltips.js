import * as React from "react";
import * as System from "~/components/system";
import Group from "~/components/system/Group";

import SystemPage from "~/components/system/SystemPage";
import ViewSourceLink from "~/components/system/ViewSourceLink";

export default class SystemPageTooltips extends React.Component {
  render() {
    return (
      <SystemPage
        title="SDS: Tooltips"
        description="..."
        url="https://fps.onrender.com/system/tooltips"
      >
        <System.H1>
          Tooltips <ViewSourceLink file="system/tooltips.js" />
        </System.H1>
        <br />
        <br />
        <System.P>
          The Tooltip component is used to provide the user with more
          information in a message that appears when they interact with an
          element.
        </System.P>
        <br />
        <br />
        <br />
        <System.H2>Imports</System.H2>
        <hr />
        <br />
        <System.P>Import React and the TooltipAnchor Component.</System.P>
        <br />
        <br />
        <System.CodeBlock>
          {`import * as React from 'react';
import { TooltipAnchor } from 'slate-react-system';`}
        </System.CodeBlock>
        <br />
        <br />
        <System.H2>Usage</System.H2>
        <hr />
        <br />
        <System.P>Declare the Tooltip component.</System.P>
        <br />
        <System.CodeBlock>{`class ExampleOne extends React.Component {
   render() {
       return(
         <TooltipAnchor tooltip="Hello friends!!" />
       )
   }
}`}</System.CodeBlock>
        <br />
        <br />
        <System.H2>Output</System.H2>
        <hr />
        <br />
        <System.TooltipAnchor tooltip="Hello friends!!" />
        <br />
        <br />
        <br />
        <System.H2>Accepted React Properties</System.H2>
        <hr />
        <br />
        <Group title="Tooltip">
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
                  a: "tooltip",
                  b: <System.CodeText>string</System.CodeText>,
                  c: "null",
                  d: "Output text on the tooltip",
                },
                {
                  id: 2,
                  a: "height",
                  b: <System.CodeText>number</System.CodeText>,
                  c: "24px",
                  d: "Height of the tooltip",
                },
              ],
            }}
          />
        </Group>
      </SystemPage>
    );
  }
}
