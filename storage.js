
// localStorage 中的成员函数,sessionStorage 中的成员函数与local Storage相同
// localStorage.getItem(key:string)
// localStorage.length
// localStorage.setItem(key:string,data:string or func)
// localStorage.key(index:number)
// localStorage.removeItem(key:string)
// localStorage.clear()


// 判断浏览器对存储机制的支持情况
const checkStorageSupport = function(){
    return !!window.sessionStorage && !!window.localStorage;
};

// sessionStorage 存储的内容在浏览器重启后将自动清除
sessionStorage.setItem("name","Flash");

//localStorage 存储的内容不会自动清除，只能手动清除
localStorage.setItem("name","Arrow");
for(let i = 0;i<1000; i++){
    localStorage.setItem("count"+`${i}`,`${i}`);
    console.log(`count${i}:${i}`);
}

// local Storage中的KV数据结构可以设置成函数方式
localStorage.setItem("len",function getLength(){return localStorage.length}());

console.log("显示浏览器内存中的内容："+
    `\n sessionStorage:${sessionStorage.getItem("name")}
     \n localStorage:${localStorage.getItem("count999")}
     \n length:${localStorage.getItem("len")}`);

localStorage.clear();