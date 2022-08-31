const tip=()=> {
    document.getElementById("btn").style.background='purple';

    let amount =document.getElementById('bill').value;
    let perc=document.getElementById('percentage').value;

    /// check if the totalBill is empty
    if(amount ==''||perc==''||amount==0){
        alert('Please enter bill amount greater than 0 ');
        return;
    } 
    
     
    let tip =amount*(perc/100);

    tip=tip.toFixed(2);

    let total=Number(tip)+Number(amount);

    total=total.toFixed(2);

    document.getElementById('Total').value=total;

    }

