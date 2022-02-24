// Task String Text
let str = [
	`Please take your dog, Cali, out for a walk - he really needs some exercise! What a beautiful day it is on the beach,here in beautiful and sunny Hawaii.`,
	`Rex Quinfrey, a renowned scientist, created plans for an invisibility machine. Do you know why all those chemicals are so hazardous to the environment?`,
	`You never did tell me how many copper where in that jar; how come? Max Joykner sneakily drove his car around every corner looking for his dog.`,
	`The two boys collected twigs outside, for over an hour, in the freezing cold! When do you think they will get back from their adventure in Cairo, Egypt?`,
	`Trixie and Veronica, our two cats, just love to play with their pink ball of yarn. We climbed to the top of the mountain in just under two hours; isn't that great?`,
	`Hector quizzed Mr. Vexife for two hours, but he was unable to get any information. I have three things to do today: wash my car, call my mother, and feed my dog.`,
	`Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside. The Reckson family decided to go to an amusement park on Wednesday.`,
	`That herd of bison seems to be moving quickly; does that seem normal to you? All the grandfather clocks in that store were set at exactly 3 o'clock.`,
	`There are so many places to go in Europe for a vacation-Paris, Rome, Prague, etc. Those diamonds and rubies will make a beautiful piece of jewelry.`,
	`The steamboats seemed to float down the Mississippi River at a snails pace. In order to keep up at that pace, Zack Squeve would have to work all night.`,
	`A bird in the hand is worth two in the bush. Caught between a rock and a hard place. Closing the barn door after the horse escapes.`,
	`Do I look like a turnip that just fell off the turnip truck? Don't count your chickens before they hatch. Don't make a mountain out of a molehill.`,
	`Friends are flowers in the garden of life. The grass is always greener on the other side. Just staying one day ahead of yesterday.`,
	`Lie down with dogs and wake up with fleas. The sharper the berry, the sweeter the wine. The squeaky wheel gets the grease.`,
	`The stronger the breeze the stronger the trees. The way to a man's heart is through his stomach. A weed is no more than a flower in disguise.`,
	`We'll cross that bridge when we come to it. You can lead a horse to water but you can't make him drink. You can't teach an old dog new tricks.`,
	`Establish what you wish to accomplish when writing the letter. Think about your reader's needs as well. All work and no play robs one of some fun in life.`,
	`Proofread several times, checking for spelling and grammatical errors. Don't rely solely upon your computer's Spell Check program. Computers don't understand context or homophones.`,
	`This is the date your letter was completed and is ready for mailing. It should be aligned with the left margin. The date should be at least three spaces below the heading.`,
	`Tell people you're learning English. They will usually be understanding. You might be surprised at how patient people are when they know you're still learning English.`,
	`This is a casual way to suggest meeting for a quick coffee and maybe having a nice conversation. It doesn't have a specific time attached to it, it'ts just a general idea for the future.`,
	`When you're out for lunch, you might not know what you want. Sometimes it's easier to just ask for the same thing as one of your coworkers. Remember that you can only use this phrase after someone else has ordered!`,
	`A good way to make sure you don't miss anything important at a meeting is to record it so you can listen to it again later. Ask for permission first by using this sentence.`,
	`Don't be afraid to ask this question. It's better to understand everything completely than to think you understand, and then waste time doing something the wrong way.`,
	` If you didn't hear something, you can ask the person to say it again. If you still don't understand, you can also ask "Can you please rephrase that?" This question asks the speaker to say something again, but using different words. It may help you understand what they're saying better.`
];

let p=0;
let len = str.length;
let load = Math.floor(Math.random() * len);
// let load=0;
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


let time = 30;
let timePos=0;
let timeHas =true;
let timeFlag = true;
let timeDecreaseNeed = true;

let numberOfCorrectChar = 0;
let numberOfIncorrectChar = 0;
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
				
				numberOfCorrectChar++;
				
			} else{
				document.getElementById(`word-${position}`).style.backgroundColor = '#FFC0CB';
				document.getElementById(`word-${position}`).classList.remove('active');
				if(position<str[load].length-1){
					document.getElementById(`word-${position+1}`).classList.add('active');
				}
				if(position<str[load].length){
					position++;
				}

				numberOfIncorrectChar++;
			}
		} else if(event.key == 'Backspace'){
			
			document.getElementById(`word-${position-1}`).classList.add('active');
			document.getElementById(`word-${position}`).classList.remove('active');
			position--;
			// console.log(document.getElementById(`word-${position}`).style.backgroundColor);
			//rgb(231, 251, 211) right
			//rgb(255, 192, 203) wrong
			if(document.getElementById(`word-${position}`).style.backgroundColor === 'rgb(231, 251, 211)'){
				numberOfCorrectChar--;
			} else{
				numberOfIncorrectChar--;
			}
			document.getElementById(`word-${position}`).style.backgroundColor = 'white';

		}
	} 


	if(position==str[load].length){
		
		document.getElementById('test-finished-message').style.display = 'block';
		document.getElementById('test-finished-message').innerText =`Congratulation!!! You have Complete the Typing Test.`;
		calculateRate(30-time);

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
		document.getElementById('test-finished-message').style.display = 'block';
		document.getElementById('test-finished-message').innerText =`Congratulation!!! You have Complete the Typing Test.`;
		timeHas = false;
		calculateRate(30);
	}
};
console.log("sakib");
// Try again button
const tryAgain = () => {
	window.location.reload();
}

const calculateRate = (time) => {
	console.log(time);
	
	
	let grossWPM = 0;
	let grossWPMWrong = 0;
	let netWPM = 0 ;
	if(time!=0){ 
		time =time/60;
		grossWPM = (numberOfCorrectChar/5)/time;
		grossWPMWrong = (numberOfIncorrectChar/5)/time;
		netWPM = grossWPM - grossWPMWrong;
	}
	

	let accuracy = (netWPM/grossWPM) * 100;
	if(netWPM<=0){
		netWPM=0;
		accuracy=0;
	}
	console.log(grossWPM, grossWPMWrong, netWPM, accuracy);

	document.getElementById('result-section').style.display ='block';

	document.getElementById('mistake').innerText = `${numberOfIncorrectChar}`;
	document.getElementById('wpm').innerText = `${netWPM}`;
	document.getElementById('accuracy').innerText = `${accuracy.toFixed(2)}`;
}