pragma solidity ^0.4.18;

contract WhistleMessage {
	struct Message {
        address sender;
		string title;
        string message;
		uint timestamp;
    }
	struct MessageCollection {
		uint counter;
        mapping(uint => Message) messages;
    }
	mapping(address => MessageCollection) private messages;

	function getNumberOfMessages(address receiver)
		public
		view
		returns (uint)
	{
		return messages[receiver].counter;
	}

	function getMessage(address receiver, uint id)
	    public
	    view
	    returns (address,string,string,uint)
    { 
		Message memory message = messages[receiver].messages[id];
		return (message.sender, message.title, message.message, message.timestamp);
	}

	function addMessage(address receiver, string title, string message)
		public
		returns (address,string,string,uint) 
	{
		Message memory newMessage = Message(msg.sender,title,message,block.timestamp);
		MessageCollection storage currentMessages = messages[receiver];
		currentMessages.messages[currentMessages.counter] = newMessage;
		currentMessages.counter++;
		return (newMessage.sender, newMessage.title, newMessage.message, newMessage.timestamp);
	}
}
