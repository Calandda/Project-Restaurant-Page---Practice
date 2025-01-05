class aboutObject {
	constructor(){
		this.aboutCheck = 'About = working';
	};
	getAboutCheck(){
		return this.aboutCheck;
	}
};

const about = new aboutObject();

export {about};