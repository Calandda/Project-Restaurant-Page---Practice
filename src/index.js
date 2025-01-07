import {home} from './home/home.js';
import {about} from './about/about.js';
import {menu} from './menu/menu.js';
import './style.css';

class mainObject{
	mainDiv = document.querySelector('#content');
	mainNav = document.querySelector('#navMain');
	constructor(){
		this.mainDiv.textContent = 'test';
		this.mainNav.addEventListener("click",(e) => {
			this.clearMain();
			//const template = document.querySelector('.templateHeader');
			//console.log(template);
			//const clone = template.cloneNode(true);
			//this.mainDiv.appendChild(clone);
			console.log(e.target.className);
			if(e.target.className === 'buttonHome'){
				console.log(home.getHomeCheck());
				home.setHomePage(this.mainDiv);
			} else if(e.target.className === 'buttonAbout'){
				console.log(about.getAboutCheck());
			} else if(e.target.className === 'buttonMenu'){
				console.log(menu.getMenuCheck());
			}
		});
	};
	clearMain(){
		while (this.mainDiv.firstChild){
			this.mainDiv.removeChild(this.mainDiv.firstChild);
		}
	};
}

const mainPage = new mainObject();