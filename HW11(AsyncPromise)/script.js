

async function getRandomChinese(length) {
    let i = 0;
    let chineSings = '';
    while (i < length) {
        const randomChinese = new Promise((resolve,reject) => {
            setTimeout(() => {
                const srting = Date.now().toString().slice(-5);
                const sign = String.fromCharCode(srting);
                resolve(sign);
                i++
            }, 50)
        })
        chineSings = chineSings + await randomChinese;
    }
    return chineSings

}

getRandomChinese(4).then(console.log)
