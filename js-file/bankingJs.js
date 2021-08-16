// handle diposit button 
document.getElementById('deposit-button').addEventListener('click', function () {

  // get the amount depositd

  const depositInput = document.getElementById('deposit-input');
  const NewDeposiText = depositInput.value;
  const NewDepositAmount = parseFloat(NewDeposiText);
  // console.log(depositAmount);

  // update deposit totle
  const depostiTotle = document.getElementById('deposit-totle')
  const previusDepositText = depostiTotle.innerText;
  const previusDepositAmount = parseFloat(previusDepositText)
  const newDepositTotle = previusDepositAmount + NewDepositAmount;

  depostiTotle.innerText = newDepositTotle;

  // update account balance
  const balanceTotle = document.getElementById('balanc-totle');
  const balanceTotleText = balanceTotle.innerText;
  const previusBalanceTotle = parseFloat(balanceTotleText);
  const newBalanceTotle = previusBalanceTotle + newDepositTotle;
  balanceTotle.innerText = newBalanceTotle;

  // clear the deposit input field
  depositInput.value = "";
})

// handle withdraw event handlr

document.getElementById('withdraw-button').addEventListener('click', function () {

  // get the amount depositd
  const withdrawInput = document.getElementById('withdraw-input');
  const newWithdrawText = withdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawText); 

  // update withdraw totle
  const withdrawTotle = document.getElementById('withdraw-totle');
  const previusWithdrawText = withdrawTotle.innerText;
  const previusWithdrawTotle =parseFloat(previusWithdrawText );
  const newWithdrawTotle = previusWithdrawTotle  + newWithdrawAmount;

  withdrawTotle.innerText = newWithdrawTotle;

  // update account balance

  const balanceTotle = document.getElementById('balanc-totle');
  const previusBalanceText = balanceTotle.innerText;
  const previusBalanceTotle = parseFloat(previusBalanceText);
  const newBalanceTotle = previusBalanceTotle - newWithdrawAmount;

  balanceTotle.innerText = newBalanceTotle;

  // clear the withdraw input field

  withdrawInput.value = '';

})