import * as React from "react";
import * as Web3 from "web3";
import {WhistleMessage} from "../contract-interfaces/WhistleMessage";

const appStyles = require("../App.css");

interface ISendMessagesProps {
  web3: Web3;
}
interface ISendMessagesState {
  message: string;
  error: string;
  address: string;
  title: string;
}

export default class SendMessages extends React.Component<ISendMessagesProps, ISendMessagesState> {
  constructor(props) {
    super(props);
    this.state = {
        message: "",
        error: "",
        address: "",
        title: "",
      };
    this.updateMessage = this.updateMessage.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.sendToBlockChain = this.sendToBlockChain.bind(this);
  }

  public async componentWillMount() {
    if (this.props.web3 == null || this.props.web3.eth.accounts.length === 0) {
        this.setState({
          ...this.state,
          error: "could not initialize web3!",
        });
        return;
      }
  }

  public updateMessage(evt: any) {
    this.setState({
      message: evt.target.value,
    });
  }
  public updateAddress(evt: any) {
    this.setState({
      address: evt.target.value,
    });
  }
  public updateTitle(evt: any) {
    this.setState({
      title: evt.target.value,
    });
  }
  public async sendToBlockChain() {
    console.log("account " + this.props.web3.eth.accounts[0]);
    const whistleMessageInstance = await WhistleMessage.createAndValidate(this.props.web3,
      "0x345ca3e014aaf5dca488057592ee47305d9b3e10");
    const messageTx = await whistleMessageInstance.addMessageTx(
      this.state.address, this.state.title, this.state.message);
    const result = await messageTx.send({ from: this.props.web3.eth.accounts[0]});
    console.log(result);
  }
  public render() {
    const {error} = this.state;
    return (
      <div className={appStyles.messageSendingUI}>
        <h3>{error}</h3>
        <h3>Receivers public key for cryptography:</h3>
        <input className={appStyles.titleInput} onChange={this.updateAddress} type="text" />
        <h2>Title:</h2>
        <input className={appStyles.titleInput} onChange={this.updateTitle} type="text" />
        <h2>Message:</h2>
        <textarea className={appStyles.messageInput} onChange={this.updateMessage} />
        <div>
          <button className={appStyles.sendButton} onClick={this.sendToBlockChain} >
            Send message to Whistle!
          </button>
        </div>
      </div>
    );
  }
}
