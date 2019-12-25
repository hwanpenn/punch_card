const process = require("child_process");
const schedule = require("node-schedule");

function exec(shell) {
  process.exec(shell, function(error, stdout, stderr) {
    if (error !== null) {
      console.log("exec error: " + error);
    }
  });
}
function lock() {
  console.log("lock");
  exec(`adb shell input keyevent 26`);
}
function back_home() {
  console.log("back_home");
  exec(`adb shell input keyevent 3`);
  setTimeout(lock, 1000);
}
function click() {
  console.log("click");
  exec(`adb shell input tap 352 694`);
  setTimeout(back_home, 60000);
}
function login() {
  console.log("login");
  exec(`adb shell input text "dingding5277"`);
  setTimeout(click, 1000);
}
function input() {
  console.log("input");
  exec(`adb shell input tap 175 576`);
  setTimeout(login, 1000);
}
function go_home() {
  console.log("go_home");
  exec(`adb shell input tap 122 136`);
  setTimeout(input, 20000);
}
function un_lock() {
  process.exec(`adb shell dumpsys power`, function(error, stdout, stderr) {
    if (JSON.stringify(stdout).indexOf("state=OFF") > 0) {
      console.log("锁屏状态,解锁");
      exec(`adb shell input keyevent 26`);
      setTimeout(go_home, 1000);
    } else {
      console.log("点亮状态");
    }
  });
}
function start() {
  const time = Math.floor(Math.random()*10)*3*1000*60
  setTimeout(un_lock(),time)
}
function test() {
  const time = 1000*60
  console.log("一分钟后开始测试");
  setTimeout(un_lock(),time)
}

const scheduleTime = ()=>{
    const rule = new schedule.RecurrenceRule()
    rule.dayOfWeek = [1,2,3,4,5]
    rule.hour = [8,18]
    rule.minute = 30
    console.log("start punch , wait ...");
    schedule.scheduleJob(rule,()=>{
      start()
    });
}
scheduleTime();
test()