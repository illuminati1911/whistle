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

	function getMessages(address addr)
	    public
	    view
	    returns (Message[])
    { 
		var messageColl = messages[addr];
  	    var result = new Message[](messageColl.counter);
		for (uint i = 0; i < messageColl.counter;  i++) {
			result[i] = messageColl.messages[i];
		}
		return result;
	}

	function addMessage(address receiver, string title, string message)
		public
		returns (Message) 
	{
		var newMessage = Message(msg.sender,title,message,block.timestamp);
		var currentMessages = messages[receiver];
		currentMessages.messages[currentMessages.counter] = newMessage;
		currentMessages.counter++;
		return newMessage;
	}
}
