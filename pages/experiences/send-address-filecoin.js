import * as React from "react";
import * as System from "~/components/system";

import SystemPage from "~/components/system/SystemPage";
import ViewSourceLink from "~/components/system/ViewSourceLink";

const EXAMPLE_CODE = `import * as React from 'react';
import { SendAddressFilecoin } from 'slate-react-system';
import { createPow } from "@textile/powergate-client";

const PowerGate = createPow({ host: 'http://0.0.0.0:6002' });
const FFS = await PowerGate.ffs.create();
const token = FFS.token ? FFS.token : null;
PowerGate.setToken(token)

class Example extends React.Component {
  _handleSend = async ({ source, target, amount }) => {
    const response = await PowerGate.ffs.sendFil(
      source, 
      target, 
      amount
    );
  }

  render() {
    return (
      <SendAddressFilecoin onSubmit={this._handleSend} />
    );
  }
}
`;

export default class SystemPageSendAddressFilecoin extends React.Component {
  _handleSubmit = ({ source, target, amount }) => {
    alert(JSON.stringify({ source, target, amount }));
  };

  render() {
    return (
      <SystemPage
        title="SDS: Send Address Filecoin"
        description="..."
        url="https://fps.onrender.com/experiences/send-address-filecoin"
      >
        <System.H1>
          Send an Address Filecoin{" "}
          <ViewSourceLink file="experiences/send-address-filecoin.js" />
        </System.H1>
        <br />
        <br />
        <System.P>
          Here is an example of an experience for sending a filecoin address
          filecoin using{" "}
          <a target="_blank" href="https://github.com/textileio/powergate/">
            Textile's Powergate
          </a>
        </System.P>
        <br />
        <br />
        <System.SendAddressFilecoin onSubmit={this._handleSubmit} />
        <br />
        <br />
        <System.H2>Code</System.H2>
        <br /> <br />
        <System.CodeBlock>{EXAMPLE_CODE}</System.CodeBlock>
      </SystemPage>
    );
  }
}
