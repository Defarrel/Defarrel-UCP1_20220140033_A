const currentTimeElement = document.getElementById("current-time");

function getCurrentTime() {
    const now = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    const timeString = `${day}, ${date} ${month} ${year} ${hours}:${minutes}`;
    currentTimeElement.textContent = timeString;
}

getCurrentTime();

setInterval(getCurrentTime, 1000);
