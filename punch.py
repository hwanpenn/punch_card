import schedule
import time
import datetime
import os

def exec(cmd,time):
    time.sleep(time)
    print('Job4-startTime:%s' % (datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')))
    str = adbShell.format(cmdStr=cmd)
    print(str)
    os.system(str)

def punch(cmd):
    exec("adb shell input keyevent 26")
    exec("adb shell input tap 400 600", 2000)
    exec("adb shell input tap 175 576", 10000)
    exec("adb shell input text "dingding5277"", 2000)
    exec("adb shell input tap 352 694", 2000)
    exec("adb shell input tap 400 600", 60000)
    exec("adb shell input keyevent 26", 2000)

if __name__ == '__main__':
    print("start-----")
    schedule.every().day.at('1:20').do(punch)
    while True:
        schedule.run_pending()