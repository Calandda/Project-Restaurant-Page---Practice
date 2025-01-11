class aboutObject {
	constructor(){
		this.aboutCheck = 'About = working';
	};
	getAboutCheck(){
		return this.aboutCheck;
	}
	setAboutPage(mainDiv, storePage){
		const template = document.querySelector('.templateAbout');
		const clone = template.content.cloneNode(true);

		mainDiv.appendChild(clone);
	}
};

const about = new aboutObject();

export {about};