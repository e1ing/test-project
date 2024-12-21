// export function isPalindrome (phrase: string) {
//    const noSpacePhrase = phrase.split(" ").join("").toLowerCase();
//    let checkingPart = Math.trunc(noSpacePhrase.length/2)
//     for (let i = 0, j = noSpacePhrase.length-1; i<checkingPart; i++, j-- ) {
//       if (noSpacePhrase[i] !== noSpacePhrase[j]) return "The phrase is not a palindrome!"
//     }
//     return "The phrase is a palindrome!"
// } 

export function isPalindrome (phrase: string) {
   const inputPhrase = phrase.split(" ").join("").toLowerCase();
   const reversePhrase = inputPhrase.split("").reverse().join("");
   if (inputPhrase!==reversePhrase) return "The phrase is not a palindrome!"
   else return "The phrase is a palindrome!"
} 

class Coffee {
	constructor (name: any, price: any) {
		this.name = name;
		this.price = price;
}

	getDescription() {
	return `${this.name} - ${this.price}`;
} 

brew() {
return "Brewing a basic coffee.";
}

}

class Espresso extends Coffee {    //наследует свойства и методы класса Coffee
	constructor (price: any, shots: any) {
		super ("Espresso", price); //наследует от класса Coffee
      this.shots = shots;
	}

	getDescription() {   //переопределение метода класса Coffee с   добавлением данных в выводимую информацию
		return  `${super.getDescription()}  (${this.shots} shots)}`; 
	}
	
	brew() {        //переопределение метода класса Coffee
		return `Brewing a strong espresso with ${this.shots} shots.`;
}
}

const espresso = new Espresso(100, 2)
console.log(espresso.getDescription());        //Espresso - 100 (2 shots)
console.log(espresso.brew());                       //Brewing a strong espresso with 2 shots
