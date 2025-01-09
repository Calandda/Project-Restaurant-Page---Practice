import {home} from './home/home.js';
import {about} from './about/about.js';
import {menu} from './menu/menu.js';
import './style.css';

class mainObject{
	mainDiv = document.querySelector('#content');
	mainNav = document.querySelector('#navMain');
	shopName = 'Pizza Time';
	constructor(){
		this.mainDiv.textContent = 'test';
		this.mainNav.addEventListener("click",(e) => {
			this.clearMain();
			//const template = document.querySelector('.templateHeader');
			//console.log(template);
			//const clone = template.cloneNode(true);
			//this.mainDiv.appendChild(clone);
			console.log(e.target.tagName);
			if(e.target.tagName == 'BUTTON'){
				this.setNavButton(e.target);
				if(e.target.className === 'buttonHome'){
					console.log(home.getHomeCheck());
					home.setHomePage(this.mainDiv, this.shopName);
				} else if(e.target.className === 'buttonAbout'){
					console.log(about.getAboutCheck());
				} else if(e.target.className === 'buttonMenu'){
					console.log(menu.getMenuCheck());
				}
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
			console.log(navBar[i].classList.remove('colorGray'));
		};
		buttonSelected.classList.add('colorGray');
	}
}

const mainPage = new mainObject();