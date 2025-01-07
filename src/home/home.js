class homeObject {
	constructor(){
		this.homeCheck = 'homeCheck = working';
	};
	getHomeCheck(){
		return this.homeCheck;
	};
	setHomePage(mainDiv, storePage){
		const template = document.querySelector('.templateHeader');
		const clone = template.content.cloneNode(true);
		const shopHeader = clone.querySelector('.divHeader');
		shopHeader.textContent = storePage;
		mainDiv.appendChild(clone);
	};
};

const home = new homeObject();

export {home};

