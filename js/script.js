// Task String Text
let str = [
	`Therere's`,
	`Please take your dog, Cali, out for a walk - he really needs some exercise! What a beautiful day it is on the beach,here in beautiful and sunny Hawaii.`,
	`Rex Quinfrey, a renowned scientist, created plans for an invisibility machine. Do you know why all those chemicals are so hazardous to the environment?`,
	`You never did tell me how many copper where in that jar; how come? Max Joykner sneakily drove his car around every corner looking for his dog.`,
	`The two boys collected twigs outside, for over an hour, in the freezing cold! When do you think they will get back from their adventure in Cairo, Egypt?`,
	`Trixie and Veronica, our two cats, just love to play with their pink ball of yarn. We climbed to the top of the mountain in just under two hours; isn't that great?`,
	`Hector quizzed Mr. Vexife for two hours, but he was unable to get any information. I have three things to do today: wash my car, call my mother, and feed my dog.`,
	`Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside. The Reckson family decided to go to an amusement park on Wednesday.`,
	`That herd of bison seems to be moving quickly; does that seem normal to you? All the grandfather clocks in that store were set at exactly 3 o'clock.`,
	`There are so many places to go in Europe for a vacation-Paris, Rome, Prague, etc. Those diamonds and rubies will make a beautiful piece of jewelry.`,
	`The steamboats seemed to float down the Mississippi River at a snails pace. In order to keep up at that pace, Zack Squeve would have to work all night.`
];

let p=0;
let len = str[0].length;
// let load = Math.floor(Math.random() * 10);
let load=0;
console.log(len);
for(const s of str[load]){
	let container = `<span id="word-${p}" class="word">${s}</span>`;
	console.log(typeof(container));
	document.getElementById('text-contain').innerHTML+=(container);
	p++;
}

			// document.getElementById(cls).style.backgroundColor = '#E7FBD3'
			// document.getElementById(cls).style.backgroundColor = '#FFC0CB';
			// document.getElementById(`word-${position}`).classList.remove('active');
			// document.getElementById(`word-${position+1}`).classList.add('active');

//Keyboard Click
let position = 0;
let cls = `word-${position}`;
document.getElementById(cls).classList.add('active');


let time = 5;
let timePos=0;
let timeHas =true;
let timeFlag = true;
let timeDecreaseNeed = true;
document.getElementById('countDown').innerText = time;
document.addEventListener('keydown', function(event){
	// Timer
	if(timeFlag){
		setInterval(updateCountDown, 1000);
		timeFlag = false;
	}
	
	console.log(event.key, position);
	
	//If time has finished
	if(timeHas){
		if(event.key.length==1){
			if(event.key == str[load][position]){
				document.getElementById(`word-${position}`).style.backgroundColor = '#E7FBD3'
				document.getElementById(`word-${position}`).classList.remove('active');
				if(position<str[load].length-1){
					document.getElementById(`word-${position+1}`).classList.add('active');
				}
				if(position<str[load].length){
					position++;
				}
				console.log(position, str[load].length);
				
				
			} else{
				document.getElementById(`word-${position}`).style.backgroundColor = '#FFC0CB'
				document.getElementById(`word-${position}`).classList.remove('active');
				if(position<str[load].length-1){
					document.getElementById(`word-${position+1}`).classList.add('active');
				}
				if(position<str[load].length){
					position++;
				}
			}
		} else if(event.key == 'Backspace'){
			
			document.getElementById(`word-${position-1}`).classList.add('active');
			document.getElementById(`word-${position}`).classList.remove('active');
			position--;
			document.getElementById(`word-${position}`).style.backgroundColor = 'white';
		}
	} 


	if(position==str[load].length){
		document.getElementById('congratulation').innerText =`Congratulation!!! You have Complete the Test.`;
		timeDecreaseNeed = false;
	}
})
const updateCountDown = () => {
	
	if(time>0){
		if(timeDecreaseNeed){
			time--;
		}
		
	}
	console.log('Timer :', time);
	document.getElementById('countDown').innerText = time;
	if(time==timePos){
		timePos++;
		document.getElementById('congratulation').innerText =`Congratulation!!! You have Complete the Test.`;
		timeHas = false;
		
	}
};
console.log("sakib");
// Try again button
const tryAgain = () => {
	window.location.reload();
}