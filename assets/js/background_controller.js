function updateBackground() {
    let position = now.getHours() + (now.getMinutes() / 60)
    let topColor = findCurrentTimeColor(position);
    let bottomColor = findCurrentTimeColor(position, true);

    document.body.style.background = `linear-gradient(to bottom, ${topColor}, ${bottomColor})`;
    setTimeout(updateBackground, update_interval);
}

function findCurrentTimeColor(position, isLighter = false) {
    let startPosition = Math.floor(position);
    let endPosition = Math.floor(position) + 1;

    if (isLighter) {
        startPosition++;
        endPosition++;
        position++;

        if (endPosition > 24) endPosition = 0;
    }

    let color_for_time = {
        0: {
            "r": 0,
            "g": 0,
            "b": 0,
        },
        1: {
            "r": 0,
            "g": 0,
            "b": 0,
        },
        2: {
            "r": 0,
            "g": 0,
            "b": 0,
        },
        3: {
            "r": 0,
            "g": 0,
            "b": 40,
        },
        4: {
            "r": 0,
            "g": 0,
            "b": 60,
        },
        5: {
            "r": 0,
            "g": 0,
            "b": 90,
        },
        6: {
            "r": 0,
            "g": 0,
            "b": 120,
        },
        7: {
            "r": 20,
            "g": 20,
            "b": 150,
        },
        8: {
            "r": 40,
            "g": 100,
            "b": 170,
        },
        9: {
            "r": 60,
            "g": 130,
            "b": 255,
        },
        10: {
            "r": 50,
            "g": 160,
            "b": 255,
        },
        11: {
            "r": 20,
            "g": 180,
            "b": 255,
        },
        12: {
            "r": 0,
            "g": 180,
            "b": 255,
        },
        13: {
            "r": 0,
            "g": 180,
            "b": 255,
        },
        14: {
            "r": 0,
            "g": 180,
            "b": 255,
        },
        15: {
            "r": 0,
            "g": 180,
            "b": 255,
        },
        16: {
            "r": 0,
            "g": 180,
            "b": 255,
        },
        17: {
            "r": 60,
            "g": 170,
            "b": 255,
        },
        18: {
            "r": 120,
            "g": 150,
            "b": 255,
        },
        19: {
            "r": 210,
            "g": 120,
            "b": 50,
        },
        20: {
            "r": 180,
            "g": 50,
            "b": 40,
        },
        21: {
            "r": 130,
            "g": 30,
            "b": 50,
        },
        22: {
            "r": 40,
            "g": 0,
            "b": 0,
        },
        23: {
            "r": 0,
            "g": 0,
            "b": 0,
        },
        24: {
            "r": 0,
            "g": 0,
            "b": 0,
        },
    };

    let r = mapLinear(position - startPosition, color_for_time[startPosition]["r"], color_for_time[endPosition]["r"]),
        g = mapLinear(position - startPosition, color_for_time[startPosition]["g"], color_for_time[endPosition]["g"]),
        b = mapLinear(position - startPosition, color_for_time[startPosition]["b"], color_for_time[endPosition]["b"]);

    return `rgba(${r}, ${g}, ${b}, 255)`;
}

function mapLinear(val, x, y) {
    return (x * (1 - val)) + (y * val)
}

updateBackground();