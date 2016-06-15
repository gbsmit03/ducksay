/*
* Ducksay is a named function that will replace /Ducksay commands
* @param {Object} message - The message object
*/


function Ducksay (command, params, item) {
	if (command === 'ducksay') {
		var msg,
        duckArt = " \n " +
                   "\\ \n" +
                   "  \\ __ \n" +
                   "  >(' ) \n" +
                   "    )/ \n" +
                   "   /( \n" +
                   "  /  `----/ \n" +
                   "  \\  ~=- / \n" +
                   " ~^~^~^~^~^~^~^"; 

		msg = item;
		msg.msg = params + duckArt;
		Meteor.call('sendMessage', msg);
	}
}

RocketChat.slashCommands.add('ducksay', Ducksay, {
	description: 'Slash_Ducksay_Description',
	params: 'your message (optional)'
});