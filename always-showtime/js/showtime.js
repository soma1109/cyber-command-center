function updateClock(){

    const now = new Date();

    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDate =now.getDate();
    const nowDay = now.getDay();
    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    const dayString = `${nowYear}/${nowMonth+1}/${nowDate} (${dayNames[nowDay]})`;

    const nowHours = String(now.getHours()).padStart(2, '0');
    const nowMinutes = String(now.getMinutes()).padStart(2, '0');
    const nowSeconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${nowHours}:${nowMinutes}:${nowSeconds}`;

    document.getElementById('day-area').textContent = dayString;
    document.getElementById('time-area').textContent = timeString;
}

setInterval(() => {
    updateClock();
}, 1000);

updateClock();

