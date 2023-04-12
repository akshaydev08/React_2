export function calculateReward(amount) {
    let reward = 0;
    if (amount > 100) {
        reward += 2 * (amount - 100)
        amount = 100;
    }
    if (amount > 50) {
        reward += (1 * amount - 50)
    }
    return reward;
}

export function getAllTransactionOfMonth(transaction, month) {
    let date = new Date();
    let year = date.getFullYear();
    let startDate = new Date(year, month, 1);
    let endDate = new Date(year, month + 1, 0);
    return transaction.filter(tran => new Date(tran.date) >= startDate && new Date(tran.date) <= endDate);
}

export function SumOfTransactionOfMonth(transaction, month) {
    const allTransaction = getAllTransactionOfMonth(transaction, month);
    return allTransaction.reduce(
        (accumulator, currentValue) => accumulator + calculateReward(currentValue.amount),
        0
    );
}