// js/navigation.js
const panels = document.querySelectorAll('.panel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const totalPanels = panels.length;

function showPanel(index) {
    panels.forEach((panel, i) => {
        if (i === index) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
}

// ボタンが存在する場合のみイベントを登録する
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalPanels;
        showPanel(currentIndex);
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalPanels) % totalPanels;
        showPanel(currentIndex);
    });
}