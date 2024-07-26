export const formatCurrency = (money)=> {
    const coin = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(money);

    return coin;
}