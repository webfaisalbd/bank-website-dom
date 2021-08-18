function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputAmount = input.value;
    const depositAmount = parseFloat(inputAmount);
    //clear input field
    input.value = '';
    return depositAmount;

}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousDepositeTotal = parseFloat(totalText);

    totalElement.innerText = previousDepositeTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {

    //capture the button value
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);



    // const depositAmount = getInputValue('deposit-input');



    //insert the button value in deposite total
    // const depositeTotal = document.getElementById('deposit-total');
    // const depositeTotalText = depositeTotal.innerText;
    // const previousDepositeTotal = parseFloat(depositeTotalText);

    // depositeTotal.innerText = previousDepositeTotal + depositAmount;



    // updateTotalField('deposit-total', depositAmount);



    //update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;


    // updateBalance(depositAmount, true);


    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);

    }

});

//handle withdraw-button

document.getElementById('withdraw-button').addEventListener('click', function () {
    //capture the withdraw button value
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);



    // const withdrawAmount = getInputValue('withdraw-input');



    //insert the withdraw button value in withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);

    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;



    // updateTotalField('withdraw-total', withdrawAmount)



    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    // updateBalance(withdrawAmount, false);



    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
    const withdrawDone = document.getElementById('trueWithdraw');
    // const withdrawUndone = document.getElementById('falseWithdraw');
    if (withdrawAmount < currentBalance) {
        withdrawDone.style.backgroundColor = 'green';
        withdrawDone.style.color = 'white';
        withdrawDone.style.borderRadius = '5px';
        withdrawDone.style.padding = '5px';
        withdrawDone.style.textAlign = 'center';
        withdrawDone.innerText = 'withdraw done';

    }

    else {

        withdrawDone.style.backgroundColor = 'red';
        withdrawDone.style.color = 'white';
        withdrawDone.style.borderRadius = '5px';
        withdrawDone.style.padding = '5px';
        withdrawDone.style.textAlign = 'center';
        withdrawDone.innerText = 'withdraw undone';
    }



    // const withdrawDone = document.getElementById('trueWithdraw');
    // const withdrawUndone = document.getElementById('falseWithdraw');
    // if (withdrawAmount < currentBalance) {
    //     withdrawDone.style.backgroundColor = 'green';
    //     withdrawDone.style.color = 'white';
    //     withdrawDone.style.textAlign = 'center';
    //     withdrawUndone.innerText = '';
    //     withdrawDone.innerText = 'withdraw done';

    // }

    // else {

    //     withdrawUndone.style.backgroundColor = 'red';
    //     withdrawUndone.style.color = 'white';
    //     withdrawUndone.style.textAlign = 'center';
    //     withdrawDone.innerText = '';
    //     withdrawUndone.innerText = 'withdraw undone';
    // }
})
