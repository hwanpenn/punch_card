var process = require('child_process');
// 模拟Power键 
// process.exec("adb shell input keyevent 26");
// 模拟Home键
// process.exec("adb shell input keyevent 3");
function exec(shell) {
 process.exec(shell,function (error, stdout, stderr) {
 if (error !== null) {
  console.log('exec error: ' + error);
 }
 });
}
function click() {
 console.log('click')
 exec(`adb shell input tap 400 600`)
 setTimeout(back, 1000)
}
function swipe() {
 console.log('swipe')
 exec(`adb shell input swipe 400 800 400 0 500`)
 setTimeout(click, 20000)
}
function back() {
 console.log('back')
 exec(`adb shell input keyevent 4`)
 setTimeout(swipe, 1000)
}
swipe()