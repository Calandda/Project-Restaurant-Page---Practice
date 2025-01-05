class homeObject {
	constructor(){
		this.homeCheck = 'homeCheck = working';
	};
	getHomeCheck(){
		return this.homeCheck;
	};
};

const home = new homeObject();

export {home};

