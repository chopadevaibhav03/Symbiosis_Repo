var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var name1 = "ajay";
console.log(typeof name1);
var age;
age = 22;
var isBoolean = true;
console.log(name1 + " " + age + " " + isBoolean);
console.log("my name is" + name1);
//for printing
//backtik `
//variable is interpolated
console.log("my name is ".concat(name1));
console.log("my age is ".concat(age));
var userName = null;
console.log(userName);
console.log(typeof userName);
var userPass;
console.log(userPass);
console.log(typeof userPass);
var x = "hello";
console.log(typeof x);
x = 18;
console.log(typeof x);
x =
    {
        id: 101,
        name: "sayali"
    };
console.log(x.id + " " + x.name);
var y = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < y.length; i++) {
    console.log(y[i]);
}
//push()
y.push(7);
for (var i = 0; i < y.length; i++) {
    console.log(y[i]);
}
console.log(y);
var a = ["sayali", "janki", "babi"];
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
//join()
console.log(a.join("-"));
//lambada/forEach()
a.forEach(function (value) {
    console.log(value);
});
//map uses callback function as lambada ()
var names = a.map(function (value) {
    console.log(value);
    return value.toUpperCase();
});
console.log(names);
//object type
var student = {
    id: "ajay",
    phone: 88888,
    isActive: true
};
console.log(student);
//console.log(student.id);//error in id cuz we cannot access particular element when we use object datatype
//we have to define like that
var student1 = {
    id: "a101",
    phone: 88888,
    isActive: true
};
console.log(student1);
console.log(student1.id);
//function 
function hello() {
    console.log("Hello j30");
}
hello();
//2 para function with return type
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//union
var userId;
userId = 10000;
userId = "a1234";
userId = true;
//void | never | unknown
function f() {
    while (true) {
    }
}
//unknown
function f1() {
    return "hii";
}
var s = f1();
//s.
var s1 = f1();
console.log(s1.toUpperCase());
//Assertion :-convert datatype(unknown to particulat datatype)
var n = s;
console.log(n.toUpperCase());
//tuples
var skill = ["program", 1];
console.log(skill[0]);
console.log(skill[1]);
//optional(?)
var s2 = ["program", 1, 900];
//enum
var Days;
(function (Days) {
    Days[Days["MON"] = 0] = "MON";
    Days[Days["TUES"] = 1] = "TUES";
    Days[Days["WED"] = 2] = "WED";
})(Days || (Days = {}));
console.log(Days.MON);
console.log(Days.TUES);
console.log(Days.WED);
function myFun(v) {
    switch (v) {
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
var n1 = "sayali";
var n2 = 1;
var n3 = true;
//types of functions ()=> return type(same as parameters)
var x1 = function myfun(a, b) {
    return a + b;
};
//1.lambada parameter
var x2 = function myfun1(a, b) {
    return a + b;
};
var person;
person = {
    fName: "sayali",
    lName: "khole",
    getFullName: function () {
        return this.fName + " " + this.lName;
    }
};
console.log(person.getFullName());
//2.optional(?) parameter
function sum(a, b, c) {
    if (c != undefined) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
console.log(sum(2, 3, 4));
console.log(sum(2, 3));
//3.default :- (c:number=2 )
function sum1(a, b, c) {
    if (c === void 0) { c = 2; }
    return a + b + c;
}
console.log(sum1(2, 3, 4));
console.log(sum1(2, 3));
//rest parameter
function add1() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var z = 0;
    rest.forEach(function (m) {
        z += m;
    });
    return z;
}
console.log(add1(2, 3));
console.log(add1(2, 3, 4));
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
var post = /** @class */ (function () {
    function post() {
        this.pId = 12345;
        this.content = "ABC";
        this.creationDate = "2-12-2012";
        this.lastModificationdate = "4-12-2012";
    }
    post.prototype.setPid = function (pId) {
        this.pId = pId;
    };
    post.prototype.getPid = function () {
        return this.pId;
    };
    post.prototype.setContent = function (Content) {
        this.content = Content;
    };
    post.prototype.getContent = function () {
        return this.content;
    };
    post.prototype.setCreationdate = function (creationDate) {
        this.creationDate = creationDate;
    };
    post.prototype.getCreationdate = function () {
        return this.creationDate;
    };
    post.prototype.setLastmodificationndate = function (lastModificationdate) {
        this.lastModificationdate = lastModificationdate;
    };
    post.prototype.getLastmodificationndate = function () {
        return this.lastModificationdate;
    };
    return post;
}());
var p = new post();
console.log(p.getPid() + " " + p.getContent() + " " + p.getCreationdate() + " " + p.getLastmodificationndate());
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
var Car = /** @class */ (function () {
    function Car() {
        this._model = "Kia";
        this._color = "Red";
    }
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (_model) {
            this._model = _model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (_color) {
            this._color = _color;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.display = function () {
        console.log(this._model + " " + this._color);
    };
    return Car;
}());
var c = new Car();
c.display();
c.model = "amaze";
c.color = "white";
c.display();
//access specifiers
var Company = /** @class */ (function () {
    //its own class cannot access protected data members directly through objs becuz pro becomes private
    function Company() {
        this.regNo = 101;
        this.name = "TCS";
    }
    Company.prototype.display1 = function () {
        console.log(this.regNo + " " + this.name);
    };
    return Company;
}());
var t = new Company();
t.display1();
var emp = /** @class */ (function (_super) {
    __extends(emp, _super);
    //super keyword ( when we make access specifer as protected )
    function emp() {
        var _this = _super.call(this) || this;
        _this.ename = "sayali";
        return _this;
    }
    emp.prototype.show = function () {
        t.display1();
        console.log(this.ename);
    };
    return emp;
}(Company));
var emp1 = new emp();
emp1.show();
