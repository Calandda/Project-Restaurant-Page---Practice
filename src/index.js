import {home} from './home.js';
import {about} from './about.js';
import {menu} from './menu.js';
import './style.css';

class mainObject{
	mainDiv = document.querySelector('#content');
	mainNav = document.querySelector('#navMain');
	constructor(){
		this.mainDiv.textContent = 'test';
		this.mainNav.addEventListener("click",(e) => {
			this.clearMain();
			const template = document.querySelector('.templateHeader');
			console.log(template);
			const clone = template.cloneNode(true);
			this.mainDiv.appendChild(clone);
			console.log(e);
		});
	};
	clearMain(){
		while (this.mainDiv.firstChild){
			this.mainDiv.removeChild(this.mainDiv.firstChild);
		}
	};
}

const mainPage = new mainObject();
console.log(home.getHomeCheck());
console.log(about.getAboutCheck());
console.log(menu.menuCheck);