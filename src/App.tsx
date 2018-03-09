import * as React from "react";
import * as Web3 from "web3";
import getWeb3 from "./util/getWeb3";

const appStyles = require("./App.css");
const logo = require("./whistle.svg");

import MetaWallet from "./components/MetaWallet";
import ReadMessages from "./components/ReadMessages";
import SendMessages from "./components/SendMessages";

interface IAppState {
  web3: Web3;
  pageIsSendMessages: boolean;
}

class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      pageIsSendMessages: true,
    };
    this.setPageToRead = this.setPageToRead.bind(this)
    this.setPageToSend = this.setPageToSend.bind(this)
  }

  public async componentWillMount() {
    const web3 = await getWeb3();
    this.setState({
      web3,
    });
  }

  public setPageToSend() {
    this.setState((prevState) => {
      return {web3: prevState.web3, pageIsSendMessages: true};
    });
  }

  public setPageToRead() {
    this.setState((prevState) => {
      return {web3: prevState.web3, pageIsSendMessages: false};
    });
  }

  public render() {
    return (
      <div className={appStyles.app}>
        <div className={appStyles.appHeader}>
          <img src={logo} className={appStyles.appLogo} alt="logo" />
          <h2>Whistle - Service for publishing sensitive data</h2>
        </div>
        <div>
          <button onClick={this.setPageToSend} className={appStyles.menuButton}>Send</button>
          <button onClick={this.setPageToRead} className={appStyles.menuButton}>Read</button>
        </div>
        <div className={appStyles.appIntro} />
        <hr />
        {this.state.pageIsSendMessages && this.state.web3 ? <SendMessages web3={this.state.web3}/> : <ReadMessages/>}
        {this.state.web3 ? null : <MetaWallet web3={this.state.web3} />}
      </div>
    );
  }
}

export default App;
