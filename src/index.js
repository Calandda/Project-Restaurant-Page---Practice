import {home} from './home.js';
import {about} from './about.js';
import {menu} from './menu.js'

class mainObject{
	mainDiv = document.querySelector('#content');
	constructor(){
		this.mainDiv.textContent = 'test';
	};
}

const mainPage = new mainObject();
console.log(home.getHomeCheck());
console.log(about.getAboutCheck());
console.log(menu.menuCheck);