// init packet (sent before connection)
function initPacket() {
	var init = new Uint8Array(3);
	initPacket2 = Math.floor(9 * Math.random());
	init[0] = 115;
	init[1] = 3;
	init[2] = initPacket2;
	// returns the full value of init
	return init;
}
