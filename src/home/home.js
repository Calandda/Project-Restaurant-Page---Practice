import pizzaClose from './imagesHome/PizzaClose.jpg';
import menuItems from '../menu-items/menu_Items.js';

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
		console.log(mainDiv);
		const divPromo = clone.querySelector('.divPromoItems');
		for(let i = 0; i < 3; i++){
			this.setPromoItems(divPromo, i);
		}
		mainDiv.appendChild(clone);
		
	};
	setPromoItems(divPromo, index){
		const templatePromoItem = document.querySelector('.templatePromo');
		const clone = templatePromoItem.content.cloneNode(true);
		const promoImage = clone.querySelector('.divPromoItemImage');
		const promoTitle = clone.querySelector('.divPromoItemTitle');
		promoImage.style.backgroundImage = "url("+menuItems[index][1]+")";
		promoTitle.textContent = menuItems[index][0];
		divPromo.appendChild(clone);
	};
};

const home = new homeObject();

export {home};

