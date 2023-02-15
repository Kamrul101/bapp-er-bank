//withdraw

document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    //withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    
    withdrawField.value ='';

    if(isNaN(withdrawAmount)){
        alert('provide Valid amount');
        return;
    }
    //previous withdraw amount
    const preWithdrawAmount = document.getElementById('update-withdraw-amount');
    const preWithdrawTotal = preWithdrawAmount.innerText;
   


    const balanceTotal = document.getElementById('balance-total');
    const preBalance = balanceTotal.innerText;
    
    
    
    if(preBalance < withdrawAmount){
        alert("Don't have enough money" );
        return;
    }
    const newWithdrawTotal = parseFloat(withdrawAmount) + parseFloat(preWithdrawTotal);
    

    //set total withdraw to withdraw section
    preWithdrawAmount.innerText = newWithdrawTotal;
    //new balance
    const newBalance = parseFloat(preBalance) - parseFloat(newWithdrawTotal);

    //set new balance
    balanceTotal.innerText = newBalance;

    
})