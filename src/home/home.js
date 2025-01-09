import pizzaClose from './imagesHome/PizzaClose.jpg';

class homeObject {
	constructor(){
		this.homeCheck = 'homeCheck = working';
	};
	getHomeCheck(){
		return this.homeCheck;
	};
	setHomePage(mainDiv, storePage){
		const template = document.querySelector('.templateHome');
		const clone = template.content.cloneNode(true);
		const mainImage = clone.querySelector('.divBG');
		mainImage.style.backgroundImage = "url("+pizzaClose+")";
		const template2 = document.querySelector('.templateHeader');
		const clone2 = template2.content.cloneNode(true);
		const shopHeader = clone2.querySelector('.divHeader');
		shopHeader.textContent = storePage;
		console.log(mainDiv);
		mainDiv.appendChild(clone);
		mainDiv.appendChild(clone2);
	};
};

const home = new homeObject();

export {home};

