interface abc{
    a: number;
    b: string;
    c: (source: string, subString?: string)=>{};
}

let d: abc[] = [];
//both are same
//let a = [] as abc[];

d.push({
    a: 5,
    b: "sfsfsf",
    c: function(source:string){
        return this.a + this.b + source; // to use this dont use arrow function as arrow function  does not support this
    }
  
})


console.log(d[0].c("ycz"));