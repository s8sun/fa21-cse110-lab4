
function callback(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let interval = setInterval(callback, 1000);