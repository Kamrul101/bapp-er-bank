//withdraw

document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    //withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    //clear withdraw input field
    withdrawField.value ='';

    if(isNaN(parseFloat(withdrawAmount))){
        alert('Enter valid amount');
        return;
    }
    //previous withdraw amount
    const preWithdrawAmount = document.getElementById('update-withdraw-amount');
    const preWithdrawTotal = preWithdrawAmount.innerText;
    
    //previous balance
    const balanceTotal = document.getElementById('balance-total');
    const preBalance = balanceTotal.innerText;

    if(parseFloat(withdrawAmount) > parseFloat (preBalance)){
        alert('Not enough money');
        return;
    }
    //total withdraw
    const newWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(preWithdrawTotal);

    //set total withdraw to withdraw section
    preWithdrawAmount.innerText = newWithdrawTotal;

    

    //new balance
    const newBalance = parseFloat(preBalance) - parseFloat(withdrawAmount);

    //set new balance
    balanceTotal.innerText = newBalance;

    
})