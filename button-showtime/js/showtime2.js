function showTime() {
    const now = new Date();
    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();
    const nowSeconds = now.getSeconds();

    console.log(`${nowHours}時 ${nowMinutes}分 ${nowSeconds}秒`);

    const timeString = `${nowHours}時 ${nowMinutes}分 ${nowSeconds}秒`;

    document.getElementById('time-area').textContent = timeString;
}