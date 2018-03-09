import * as React from "react";
import * as Web3 from "web3";
import getWeb3 from "./util/getWeb3";

const appStyles = require("./App.css");
const logo = require("./whistle.svg");

import MetaWallet from "./components/MetaWallet";
//import SendMessages from "./components/SendMessages";
import ReadMessages from "./components/ReadMessages";

interface IAppState {
  web3: Web3;
}

class App extends React.Component<{}, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
    };
  }

  public async componentWillMount() {
    const web3 = await getWeb3();
    this.setState({
      web3,
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
          <button className={appStyles.menuButton}>Send</button>
          <button className={appStyles.menuButton}>Read</button>
        </div>
        <div className={appStyles.appIntro}>
          
        </div>
        <hr />
        <ReadMessages/>
        {this.state.web3 ? null : <MetaWallet web3={this.state.web3} />}
      </div>
    );
  }
}

export default App;
