const intervalTime = 0.5 * 60 * 1000;
let date;
function dateOutput(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${day.toString().length === 1 ? `0${day}` : `${day}`}.${month.toString().length === 1 ? `0${month}` : `${month}`}.${year} | ${hours}:${minutes.toString().length === 1 ? `0${minutes}` : `${minutes}`}`;
}

async function ping() {
    date = new Date();
    await fetch('http://test.server195361.nazwa.pl')
        .then(()=> {
            console.log(`Сервак пинганулся ${dateOutput(date)}`)
        })
        .catch(e => {
            console.log(e);
        });
}

function startPinger() {
    console.log('Пингер запустился');
    setInterval(() => ping(), intervalTime);
}

module.exports = startPinger;