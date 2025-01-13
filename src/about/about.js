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
		for(let i=0;i<3;i++){
			this.setContactUs(clone);
		}
		mainDiv.appendChild(clone);
	}
	setContactUs(clone){
		const templateContact = document.querySelector('.templateContact');
		const cloneContact = templateContact.content.cloneNode(true);
		clone.appendChild(cloneContact); 
	}
};

const about = new aboutObject();

export {about};