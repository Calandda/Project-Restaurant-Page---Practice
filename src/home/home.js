class homeObject {
	constructor(){
		this.homeCheck = 'homeCheck = working';
	};
	getHomeCheck(){
		return this.homeCheck;
	};
	setHomePage(mainDiv){
		const template = document.querySelector('.templateHeader');
		const clone = template.content.cloneNode(true);
		mainDiv.appendChild(clone);
	};
};

const home = new homeObject();

export {home};

