const process = require("child_process");
const schedule = require('node-schedule');

const  scheduleCronstyle = ()=>{
    //每天早上8点半
    schedule.scheduleJob('30 45 0 * * *',()=>{
        punch()
    }); 
    //每天晚上6点半
    schedule.scheduleJob('30 10 1 * * *',()=>{
        punch()
    }); 
}

scheduleCronstyle();

// 模拟Power键
// process.exec("adb shell input keyevent 26");
// 模拟Home键
// process.exec("adb shell input keyevent 3");

function exec(shell, time = 0) {
  const cmd = process.exec(shell, function(error, stdout, stderr) {
    console.log("exec error: " + error);
    console.log("exec stdout: " + stdout);
    console.log("exec stderr: " + stderr);
  });
  setTimeout(cmd, time);
}
function punch() {
  //解锁
  exec(`adb shell input keyevent 26`);
  //解锁后 等2000毫秒 打开钉钉
  exec(`adb shell input tap 400 600`, 2000);
  //打开钉钉后 等10000毫秒 点输入密码
  exec(`adb shell input tap 175 576`, 10000);
  //2000毫秒后输入密码
  exec(`adb shell input text "dingding5277"`, 2000);
  //2000毫秒后点登录
  exec(`adb shell input tap 352 694`, 2000);
  //回首页
  exec(`adb shell input tap 400 600`, 60000);
  //锁屏
  exec(`adb shell input keyevent 26`, 2000);
}

// //点钉钉后 等20000毫秒 点工作
// exec(`adb shell input tap 353 1233`, 20000);
// //上滑100
// exec(`adb shell input swipe 353 1092 353 992`, 20000);
// //上滑后 等2000毫秒 点打卡
// exec(`adb shell input tap 603 1129`, 2000);
// //点打卡后 等20000毫秒 开始打卡
// exec(`adb shell input tap 603 1129`, 2000);
