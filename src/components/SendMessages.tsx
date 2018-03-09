import * as React from "react";

const appStyles = require("../App.css");

export default class SendMessages extends React.Component {
    constructor(props) {
      super(props);
      /*this.state = {
        account: "",
        accountError: false,
        balance: "",
        contractAddress: "",
      };*/
    }
  
    public async componentWillMount() {
      /*if (this.props.web3.eth.accounts.length === 0) {
        this.setState({
          account: "",
          accountError: true,
        });
        return;
      }
      MetaCoinContract.setProvider(this.props.web3.currentProvider);
      let instance: IMetaCoin;
      try {
        instance = await MetaCoinContract.deployed();
      } catch (err) {
        alert(err);
        return;
      }
  
      const balance  = await instance.getBalance(this.props.web3.eth.accounts[0]);
      this.setState({
        account: this.props.web3.eth.accounts[0],
        accountError: false,
        balance: balance.toString(),
        contractAddress: instance.address,
      });*/
    }
  
    public render() {
      return (
      <div className={appStyles.messageSendingUI} >
        <h3>Receivers public key for cryptography:</h3>
        <input className={appStyles.titleInput} type="text" />
        <h2>Title:</h2>
        <input className={appStyles.titleInput} type="text" />
        <h2>Message:</h2>
        <textarea className={appStyles.messageInput} />
        <div><button className={appStyles.sendButton}>Send message to Whistle!</button></div>
      </div>
      );
    }
  }
