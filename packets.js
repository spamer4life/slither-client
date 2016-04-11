// init packet (sent directly after connecting)
function initPacket(nickName) {
	var init = new Uint8Array(3 + nickName.length);
	var initPacket2 = Math.floor(9 * Math.random());
	init[0] = 115;
	init[1] = 5;
	init[2] = initPacket2;
	
	for (var i = 0; i < nickName.length; i++) {
	    init[3 + i] = nickName.charCodeAt(i);
	}
	// returns the full value of init
	return init;
}
