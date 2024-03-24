// Q no 49

function loghobbies(...hobbies :string[]) {
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}`);
    });
}
loghobbies("coding","learning","improving");

// Q no 50
let myIdealDay =`My ideal day would involve in the following:
1)wake up early in the morning and spend few minutes for reciting holly Quran
2)After reciting holly Quran I start my working which dependend on my future 
3)spending 2 hours coding for improving my coding
4)ending the day with an achivement any small success which make me happy`
console.log(myIdealDay);

// Q no 51

function calculateArea(width: number, height: number):number{
    return width * height;
}
let calculateAreaArrow =(width:number, height:number):number => width * height
console.log(calculateAreaArrow(7,9));

