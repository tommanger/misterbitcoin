async function getRate(coins){
    const rate = await fetch(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return rate.json()
}

async function getMarketPrice(){
    const chart = await fetch('https://api.blockchain.info/charts/market-price?format=json&cors=true')
    return chart.json()
}
function getConfirmedTransactions(){

}

export default{
    getRate,
    getMarketPrice
}