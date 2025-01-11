class menuObject{
	constructor(){
		this.menuCheck = 'menu = working';
	};
	getMenuCheck(){
		return this.menuCheck;
	};
	setMenuPage(mainDiv,storePage){
		const template = document.querySelector('.templateMenu');
		const clone = template.content.cloneNode(true);
		mainDiv.appendChild(clone);
	};
};

const menu = new menuObject();

export {menu};