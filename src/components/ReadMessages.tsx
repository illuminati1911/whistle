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
      <div className={appStyles.messageReadingUI} >
        <div className={appStyles.messageList}>
        <ul>
            <li><button className={appStyles.messageItem}>Message 1</button></li>
            <li><button className={appStyles.messageItem}>Message 2</button></li>
            <li><button className={appStyles.messageItem}>Message 3</button></li>
            <li><button className={appStyles.messageItem}>Message 4</button></li>
        </ul>
        </div>
        <div className={appStyles.messageDisplay}>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
      </div>
      );
    }
  }
