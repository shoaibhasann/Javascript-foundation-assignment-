const userDetails = {
    name : "Shoaib" ,
    balance : 10000
}

const userName = document.getElementById("username");
const accountBalance = document.getElementById("userbalance");
const transactionType = document.getElementById("transaction");
const transactionValue = (parseInt(document.getElementById("transaction-value")));

userName.innerHTML = userDetails.name;
accountBalance.innerHTML = userDetails.balance;

var updateBalance;



function updateAccount(){
    if(transactionType.value === "Deposit"){
       accountBalance.innerHTML = parseInt(userDetails.balance) + transactionValue ;
       
    }
    if(transactionType.value == "Withdrawl"){
        userDetails.balance = userDetails.balance - transactionValue;
        accountBalance.innerHTML = userDetails.balance;
    }
}