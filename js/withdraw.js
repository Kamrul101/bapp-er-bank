//withdraw

document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    //withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    
    //previous withdraw amount
    const preWithdrawAmount = document.getElementById('update-withdraw-amount');
    const preWithdrawTotal = preWithdrawAmount.innerText;
    

    const newWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(preWithdrawTotal);

    //set total withdraw to withdraw section
    preWithdrawAmount.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const preBalance = balanceTotal.innerText;

    //new balance
    const newBalance = parseFloat(preBalance) - parseFloat(newWithdrawTotal);

    //set new balance
    balanceTotal.innerText = newBalance;

    withdrawField.value ='';
})