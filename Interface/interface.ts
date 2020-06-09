interface a
{
    index: string;
    yellow(): number;  
}


class A implements a{
    index = "a";
    yellow() {
        return 1;
    }
    compose(){
        return "abc";
    }
}


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
    hoool?: number;
    [propName: string]: any;
    
}

function getCounter(): Counter {
    // let counter = (function (start: number) { }) as Counter;
    // counter.interval = 123;
    // counter.hoool = 5;
    // counter.reset = function () { };
    // return counter;


    // Both Are Same 

    let counter={} as Counter;
    counter.interval=123;
    counter.prototype=(start:number)=>{};
    
    counter.reset=()=>{};
    return counter;
}

let c = getCounter();


interface SearchFunc {
    (source: string, subString: string): boolean;
     abc:any;
}

let mySearch={} as SearchFunc;

mySearch.prototype = function(source: string, subString: string) {
    let result = source.search(subString);
    return true;
}

mySearch.abc="5";


interface abc{
    a: number;
    b: string;
}


let a: abc[]=[];

a = [{
    a: 5,
    b: 'yellow',
}];



interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


interface ClockConstructor1 {
    new(hour: number, minute: number): void;
}

interface ClockInterface {
  tick():void;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
      console.log("beep beep");
  }
}

new Clock(5, 5).tick();



interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}


let square: any;
square = { } as Square;
square.color = "any";
square.sideLength = 5;


let someValue: any = "this is a string";
let someValue1 = <String>someValue;
let someValue2 = someValue as String;

let strLength: number = someValue1.length;


let strLength1: number = (someValue as string).length;



class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image123 extends Control implements SelectableControl  {
    
    select() { }
}
