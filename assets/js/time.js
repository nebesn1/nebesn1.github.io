function showTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    //var seconds = date.getSeconds();
    var currentDate = year + '年' + month + '月' + day + "日";
    var currentTime = hour + '点' + minute + '分';
    var pod = "";
    if (hour >= 5 && hour < 11) {
        pod = "上午";
    } else if (hour >= 11 && hour < 13) {
        pod = "中午";
    } else if (hour >= 13 && hour < 19) {
        pod = "下午";
    } else {
        pod = "晚上";
    }
    var currentEvent = "";
    if (month == 12 && day == 26) {
        currentEvent = "今天是毛主席诞辰" + (year - 1893) + "周年纪念日。";
    } else if (month == 10 && day == 1) {
        currentEvent = "今天是国庆节，热烈庆祝中华人民共和国成立" + (year - 1949) + "周年。";
    } else if (month == 8 && day == 1) {
        currentEvent = "今天是建军节，热烈庆祝中国人民解放军建军" + (year - 1927) + "周年。";
    } else if (month == 7 && day == 1) {
        currentEvent = "今天是建党节，热烈庆祝中国共产党建党" + (year - 1921) + "周年。";
    } else if (month == 9 && day == 18) {
        currentEvent = "今天是九一八事变纪念日，铭记历史，勿忘国耻。";
    } else if (month == 12 && day == 13) {
        currentEvent = "今天是国家公祭日，铭记历史，勿忘国耻。";
    } else {
        currentEvent = "";
    }
    var str = "同志" + pod + "好，" + currentEvent + "现在时间" + currentDate + currentTime + "。";
    document.getElementById("time").textContent = str;
}
showTime();
setInterval(showTime, 1000);