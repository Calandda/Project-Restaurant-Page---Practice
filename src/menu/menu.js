import menuItems from '../menu-items/menu_Items.js';

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
		for(let i = 0;i<3;i++){
			this.setMenuItem(mainDiv,i);
		};
		
	};
	setMenuItem(mainDiv,index){
		const templateMenuItem = document.querySelector('.templatePromo');
		const clone = templateMenuItem.content.cloneNode(true);
		const menuItem = clone.querySelector('.divPromoItem');
		const menuImage = clone.querySelector('.divPromoItemImage');
		const menuTitle = clone.querySelector('.divPromoItemTitle');
		menuImage.style.backgroundImage = "url("+menuItems[index][1]+")";
		menuTitle.textContent = menuItems[index][0];
		menuItem.classList.add('colorGrayHalf');
		menuItem.classList.add('divMenuItem');
		mainDiv.appendChild(clone);
	};
};

const menu = new menuObject();

export {menu};