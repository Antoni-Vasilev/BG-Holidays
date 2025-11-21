function updateStars() {
    const width = Math.random() * 4;
    const top = Math.random() * (window.innerHeight - width);
    const left = Math.random() * (window.innerWidth - width);

    const star = document.createElement("div");
    star.style.width = `${width}px`;
    star.style.left = `${left}px`;
    star.style.top = `${top}px`;
    star.classList.add("star");

    document.body.appendChild(star);
    setTimeout(() => {
        document.body.removeChild(star);
    }, 5000);

    setTimeout(updateStars, update_interval / 1000);
}

updateStars();