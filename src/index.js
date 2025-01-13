import {home} from './home/home.js';
import {about} from './about/about.js';
import {menu} from './menu/menu.js';
import './style.css';

class mainObject{
	mainDiv = document.querySelector('#content');
	mainNav = document.querySelector('#navMain');
	shopName = 'Pizza Time';
	constructor(){
		home.setHomePage(this.mainDiv, this.shopName);
		this.setFooter();
		this.mainNav.addEventListener("click",(e) => {
			console.log(e.target.tagName);
			if(e.target.tagName == 'BUTTON'){
				this.clearMain();
				this.setNavButton(e.target);
				if(e.target.className.includes('buttonHome')){
					console.log(home.getHomeCheck());
					home.setHomePage(this.mainDiv, this.shopName);
				} else if(e.target.className.includes('buttonAbout')){
					console.log(about.getAboutCheck());
					about.setAboutPage(this.mainDiv, this.shopName);
				} else if(e.target.className.includes('buttonMenu')){
					console.log(menu.getMenuCheck());
					menu.setMenuPage(this.mainDiv, this.shopName);
				}
				this.setFooter();
			}
		});
	};
	clearMain(){
		while (this.mainDiv.firstChild){
			this.mainDiv.removeChild(this.mainDiv.firstChild);
		}
	};
	setNavButton(buttonSelected){
		const navBar = document.querySelectorAll('.buttonNav');
		for(let i = 0; i < navBar.length;i++){
			navBar[i].classList.remove('colorGrayHalf');
		};
		buttonSelected.classList.add('colorGrayHalf');
	}
	setFooter(){
		const templateFooter = document.querySelector('.templateFooter');
		const clone = templateFooter.content.cloneNode(true);
		this.mainDiv.appendChild(clone);
	};
}

const mainPage = new mainObject();