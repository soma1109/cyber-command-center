function showTime() {
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();
    const nowSeconds = now.getSeconds();

    console.log(`${nowHours}時 ${nowMinutes}分 ${nowSeconds}秒`);

    const timeString = `${nowHours}時 ${nowMinutes}分 ${nowSeconds}秒`;

    document.getElementById('time-area').textContent = timeString;
}

function showDay(){
    const now = new Date();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDate =now.getDate();
    const nowDay = now.getDay();
    const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
    
    const dayString = `${nowYear}/${nowMonth+1}/${nowDate} (${dayNames[nowDay]})`;

    document.getElementById('day-area').textContent = dayString;
}