
//Deposit Amount

document.getElementById('btn-deposit').addEventListener('click',function(){
    
    //deposit amount from input field
    const depositField = document.getElementById('deposit-field');
    const newdepositAmount = depositField.value;
    
    //clear input field
    depositField.value = '';

    if(isNaN(newdepositAmount)){
        alert('provide Valid amount');
        return;
    }
    //current deposit total
    const updateDeposit = document.getElementById('update-deposit-amount');
    const preDepositAmount = updateDeposit.innerText;


    //total deposit
    const depositTotal = parseFloat(newdepositAmount) + parseFloat(preDepositAmount);

    //set deposit
    updateDeposit.innerText = depositTotal;

    //get balance
    const balanceTotal = document.getElementById('balance-total');
    const preBalance = balanceTotal.innerText;

    //new balance
    const newBalance = parseFloat(preBalance) + parseFloat(newdepositAmount);

    //set new balance
    balanceTotal.innerText = newBalance;

    

})