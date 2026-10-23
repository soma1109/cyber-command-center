async function updateSystemStats() {
    try {
        // Pythonのサーバーの/api/satasにリクエストを送る
        const response = await fetch('http://127.0.0.1:8000/api/stats');
        const data = await response.json(); // 受け取ったデータをJSで扱える形にする

        // Pythonから届いたCPU使用率を、HTMLの箱に表示する
        document.getElementById('cpu-area').textContent = `CPU稼働率: ${data.cpu}%`;
        
    } catch (error) {
        console.error("データの取得に失敗しました...", error);
    }
}

async function measure_network() {
    try {
        // Pythonのサーバーの/api/networkにリクエストを送る
        const response = await fetch('http://127.0.0.1:8000/api/network');
        const data = await response.json(); // 受け取ったデータをJSで扱える形にする

        // ▼ bpsをMbpsに変換（100万で割って、小数点第1位までにする）
        const downMbps = (data.down / 1_000_000).toFixed(1);
        const upMbps = (data.up / 1_000_000).toFixed(1);

        // Pythonから届いたデータをHTMLの箱に綺麗に表示する！
        document.getElementById('net-area').textContent = 
            `下り: ${downMbps} Mbps / 上り: ${upMbps} Mbps (Ping: ${data.ping}ms Jitter: ${data.jitter}ms)`;
        
    } catch (error) {
        console.error("データの取得に失敗しました...", error);
    }
}

// ページが完全に読み込まれてから、ボタンに「クリックされたら関数を動かす」という命令をセットする
window.addEventListener('DOMContentLoaded', () => {
    const cpu_btn = document.getElementById('cpu-btn');
    cpu_btn.addEventListener('click', updateSystemStats);
    const net_btn = document.getElementById('net-btn');
    net_btn.addEventListener('click', measure_network);
});

// 3秒に1回、Pythonにデータを聞きに行く！
//setInterval(updateSystemStats, 3000);
