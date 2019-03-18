var arr = ["Valera", "ololo", 54, "kokoko"];
var obj = {
    ololo: "Valera",
    age: 54,
    gender: "male"
}
var arr2 = [1, 2, -1, 0, -2, 3];
var str = "Valera, ololo, 54, kokoko";


Array.prototype.newPop = function() {
    var lastItem = this[this.length - 1]
    this.length = this.length - 1;
    return lastItem;
}


// console.log(arr.newPop());


Array.prototype.newPush = function(arg) {
    this[this.length] = arg;
}


Object.prototype.newKeys = function(obj) {
    var arr = [];
    for(key in obj) {
        if(obj.hasOwnProperty(key)) {
            arr.newPush(key);
        } else {
            return arr;
        }
    }
    return arr;
}

// console.log(Object.newKeys(obj));





Object.prototype.newCreate = function(prt) {
    var obj = {};
    obj.__proto__ = prt;
    return obj;
}
var newObj = Object.newCreate(obj);
// console.log(newObj.age);
// arr.newPush("ololo");
Array.prototype.newShift = function() {
    var firstItem = this[this.length - this.length];
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1]
    }
    this.length = this.length - 1;
    return firstItem;
}
// arr.newShift();
// console.log(arr);


Array.prototype.newUnShift = function(elem) {
    console.log(this);
    for (let i = this.length; i >= 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = elem;
    return this;
}
// arr.newUnShift("kek")
// console.log(arr)

String.prototype.newSplit = function(arg) { // доделать
    var arr = [];
    var str = "";
    console.log(arg)
    for (let i = 0; i < this.length; i++) {
        if(this[i] === ",") {
            this[i] = arg;
            arr.newPush(str);
            str = "";
        } else {
            str += this[i];
        }
    }
    arr.newPush(str)
    return arr;
}

Array.prototype.newJoin = function(arg) { 
   var str = "";
   for (let i = 0; i < this.length; i++) {
    str += this[i] + arg;
   }
   return str;
}

// console.log(arr.newJoin(', '));


Array.prototype.newReverse = function() {
    // var arr = [];
    var lastItem = this.length - 1;
    for (let i = this.length - 2; i >= 0; --i) {
        this.newPush(this[i]);
    }
    for (let i = 0; i < lastItem; i++) {
        this.newShift();
    }
    return this;
}
// console.log(arr.newReverse());


Array.prototype.newforEach = function(fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i], i, this)
    }
}

Array.prototype.newFilter = function(callback) {
    var result = [];
    for (let i = 0; i < this.length; i++) {
        if(callback.call(callback, this[i], i, this)) {
            result.newPush(this[i]);
        }
    }
    return result;
}


Array.prototype.newMap = function(callback) {
    var result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = this[i];
    }
    return result;
}

 
var ololo = arr.newMap(function(elem, index, arr) {
    
})
// console.log(ololo);




Array.prototype.newEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback.call(callback, this[i], i, this)) {
            
        } else {
            return false;
        }
    }
    return true;
}

Array.prototype.newSome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if(callback.call(callback, this[i], i, this)) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}

var test = arr2.newSome(function(number) {
    return number > 0;
})



function f() {
    return console.log(arguments);
}


Function.prototype.newCall = function(context) {
    if(typeof context !== "function") {
        for (var i = 0; i < arguments.length; i++) {
            arguments[i] = arguments[i + 1]
        }
        arguments.length = arguments.length - 1;
        context.fn = this(arguments);
        delete context.fn;
    }
}

Function.prototype.newApply = function(context, arr) {
    if(typeof context !== "function") {
        context.fn = this(arguments[1]);
        delete context.fn;
    }
}


Function.prototype.newBind = function(context) {
    if(typeof this === "function" && context === "context") {
        return this.newApply(context, arguments);
    }
}

console.log(f.newBind("context"));



















