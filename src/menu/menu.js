class menuObject{
	constructor(){
		this.menuCheck = 'menu = working';
	};
	getMenuCheck(){
		return this.menuCheck;
	};
};

const menu = new menuObject();

export {menu};