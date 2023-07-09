function getColor() {
    return (Math.random() * 255 + 1).toFixed(0);

}

function gerBackGroundColor() {    
    setInterval(() => {
        const section = document.getElementById('blok');
        for (let i = 1; i <= 25; i++){
            section.insertAdjacentHTML("afterbegin", '<div style="background-color: rgb(' + getColor() +
            ',' + getColor() + ',' + getColor() + ');"></div>')
        }
    }, 1000)
}
gerBackGroundColor()
