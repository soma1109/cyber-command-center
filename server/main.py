from fastapi import FastAPI
import psutil
from fastapi.middleware.cors import CORSMiddleware
import speedtest

app = FastAPI()

# HTML/JSからアクセスできるためのおまじない
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/stats")
def get_stats():
    # CPUの使用率を取ってくる
    cpu_usage = psutil.cpu_percent(interval=1)
    
    # JavaScriptに渡しやすいように「辞書型（JSON）」で返す
    return {
        "cpu": cpu_usage
    }


@app.get("/api/network")
def measure_network():
    st = speedtest.Speedtest()
    st.get_best_server()

    download_bps = st.download()
    upload_bps   = st.upload()

    results = st.results.dict()
    
    # Ping値（ミリ秒）を取得
    ping_ms = results.get('ping')
    
    # ジッター値（ミリ秒）を取得
    # ※サーバーやライブラリのバージョンによっては 'latency_jitter' に入っています
    jitter_ms = results.get('latency_jitter', 0)

    return{
        "down": download_bps,
        "up": upload_bps,
        "ping": ping_ms,
        "jitter": jitter_ms 
    }