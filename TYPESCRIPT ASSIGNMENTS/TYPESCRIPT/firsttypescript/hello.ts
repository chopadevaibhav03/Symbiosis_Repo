console.log("Hello");
/*
class student
{


}
//if we write class in ts then it will automatically convertes to function in js
//complie the ts file in terminal as tsc hello.ts then open js file
//createing obj of student after : write datatype

let ob:student = new student();
*/


let name1:String="ajay";

console.log(typeof name1);

let age:number;
age=22;

let isBoolean:boolean=true;

console.log(name1+" "+age+" "+isBoolean);

console.log("my name is"+name1);

//for printing
//backtik `
//variable is interpolated

console.log(`my name is ${name1}`);

console.log(`my age is ${age}`);

let userName=null;
console.log(userName);
console.log(typeof userName);


let userPass ;
console.log(userPass);
console.log(typeof userPass);

let x:any="hello";
console.log(typeof x);
x=18;
console.log(typeof x);


x=
{
    id:101,
    name:"sayali"
}

console.log(x.id+" "+x.name);

let y:number[]=[1,2,3,4,5,6];

for(let i=0 ;i<y.length;i++)
{
    console.log(y[i]);
}
//push()
y.push(7);

for(let i=0 ;i<y.length;i++)
{
    console.log(y[i]);
}

console.log(y);


let a:String[]=["sayali","janki","babi"];
for(let i=0 ;i<a.length;i++)
{
    console.log(a[i]);
}

//join()
console.log(a.join("-"));

//lambada/forEach()
a.forEach((value)=>
{
    console.log(value);
});

//map uses callback function as lambada ()
let names =a.map((value)=>{
    console.log(value);
    return value.toUpperCase();
});

console.log(names);

//object type
let student:object={
    id:"ajay",
    phone:88888,
    isActive:true
};
console.log(student);
//console.log(student.id);//error in id cuz we cannot access particular element when we use object datatype

//we have to define like that
let student1:{
    id:string;
    phone:number,
    isActive:boolean
}={
    id:"a101",
    phone:88888,
    isActive:true
}

console.log(student1);
console.log(student1.id);

//function 
function hello()
{
    console.log("Hello j30");
}

hello();

//2 para function with return type
function add(a:number,b:number):number
{
    return a+b;
}

console.log(add(10,20));

//union

let userId: number | string |boolean
userId=10000;
userId="a1234";
userId=true;

//void | never | unknown

function f(): never{
    while(true)
    {

    }
}

//unknown

function f1()
{
    return"hii";
}

let s:unknown=f1();
//s.
let s1=f1();
console.log(s1.toUpperCase());

//Assertion :-convert datatype(unknown to particulat datatype)
let n:string=s as string;
console.log(n.toUpperCase());


//tuples

let skill:[string,number]=["program",1];
console.log(skill[0]);
console.log(skill[1]);

//optional(?)
let s2:[string,number,number?]=["program",1,900];

//enum

enum Days
{
        MON,
        TUES,
        WED,
}
console.log(Days.MON);
console.log(Days.TUES);
console.log(Days.WED);


function myFun(v:Days)
{
    switch(v)
    {
        case Days.MON:
            console.log("this is monday");
            break;

        case Days.TUES:
            console.log("this is tuesday");
            break;

        case Days.WED:
            console.log("this is wednesday");
            break;
    }
}

myFun(1);

//type alias

type abc=string | number | boolean
let n1:abc="sayali";
let n2:abc=1;
let n3:abc=true;
//types of functions ()=> return type(same as parameters)

let x1=function myfun(a:number, b:number):number
{
    return a+b;
}

//1.lambada parameter

let x2:(a:number,b:number)=>number= 
function myfun1(a:number, b:number):number
{
    return a+b;
}

let person:
{
    fName:string,
    lName:string,
    getFullName:()=>string
};

person={
    fName:"sayali",
    lName:"khole",
    getFullName:function()
    {
        return this.fName+" "+ this.lName;
    }

}


console.log(person.getFullName());

//2.optional(?) parameter

function sum(a:number,b:number,c?:number)
{
    if(c!= undefined)
    {
        return a+b+c;
    }
    else
    {
        return a+b;
    }
}

console.log(sum(2,3,4));
console.log(sum(2,3));

//3.default :- (c:number=2 )

function sum1(a:number,b:number,c:number=2)
{
        return a+b+c;
}

console.log(sum1(2,3,4));
console.log(sum1(2,3));


//rest parameter

function add1(...rest:number[])
{
    let z=0;
    rest.forEach((m)=>
    {
        z+=m;
    });
    return z;
}

console.log(add1(2,3));
console.log(add1(2,3,4));


//class

// class car
// {
//     model:string="kia";
//     color:string="black";

//     setModelName(model:string):void
//     {
//         this.model=model;
//     }

//     getModelName():string
//     {
//         return this.model;
//     }

    
//     setColorName(color:string):void
//     {
//         this.color=color;
//     }

//     getColorName():string
//     {
//         return this.color;
//     }
// }
// let c: car= new car();

// console.log(c.getModelName()+ " "+ c.getColorName());



//post

class post
{
    pId:number=12345;
    content:string="ABC";
    creationDate:string="2-12-2012";
    lastModificationdate:string="4-12-2012";

    
    setPid(pId:number):void
    {
        this.pId=pId;
    }

    getPid():number
    {
        return this.pId;
    }

    
    setContent(Content:string):void
    {
        this.content=Content;
    }

    getContent():string
    {
        return this.content;
    }

    
    setCreationdate(creationDate:string):void
    {
        this.creationDate=creationDate;
    }

    getCreationdate():string
    {
        return this.creationDate;
    }

    setLastmodificationndate(lastModificationdate:string):void
    {
        this.lastModificationdate=lastModificationdate;
    }

    getLastmodificationndate():string
    {
        return this.lastModificationdate;
    }

}

let p :post=new post();
console.log(p.getPid()+" "+p.getContent()+" "+p.getCreationdate()+" "+p.getLastmodificationndate());


//constructor

// class comments
// {
//     commentId:number;
//     content:string;

//     constructor()
//     {
//         this.commentId=101;
//         this.content="topic is good";
//     }

//     display():void
//     {   
//         console.log(this.commentId+" "+this.content);
//     }
// }

// let com:comments=new comments();
// com.display();

//cons . overloading

/*
class comments
{
    commentId:number;
    content:string;

    constructor(commentId=101,content="topic is good")
    {
        this.commentId=commentId;
        this.content=content;
    }

    display():void
    {   
        console.log(this.commentId+" "+this.content);
    }
}

let com:comments=new comments();
com.display();


//WAP to find sum of 2 numbers using class and constructor

class sum2
{
    a:number;
    b:number;

    constructor(a=7,b=9)
    {
        this.a=a;
        this.b=b;

    }

    addNo():void
    {
       console.log(("addition is: "+(this.a+this.b)));
    }
}

let addi:sum2=new sum2();
addi.addNo();
*/

//getter-setter


class Car
{
  private  _model:string="Kia";
  private  _color:string="Red";

  public  set model(_model:string)
    {
        this._model=_model;
    }

    public get model():string
    {
        return this._model;
    }

    set color(_color:string)
    {
        this._color=_color;
    }

    get color():string
    {
        return this._color;
    }

    display():void{
        console.log(this._model+" "+this._color);
    }

}

let c:Car=new Car();

c.display();

c.model="amaze";
c.color="white";

c.display();

//access specifiers

class Company
{
    private regNo:number;
   // private name:string; // we cannot access private members and cannot be accessed by extended class
   protected name:string; //cannot be accessed by extended class 
    //its own class cannot access protected data members directly through objs becuz pro becomes private
    constructor()
   {
    this.regNo=101;
    this.name="TCS";
  }

  display1():void
  {
    console.log(this.regNo+" "+this.name);

  }
}

let t:Company=new Company();
t.display1();

class emp extends Company
{
  // private ename:string="sayali";
  private ename:string;
//super keyword ( when we make access specifer as protected )
  constructor()
  {
    super();
    this.ename="sayali";
  }

   public show():void
   {
        t.display1()
        console.log(this.ename);
   }
}

let emp1:emp=new emp();
emp1.show();

