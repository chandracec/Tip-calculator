const tip=()=> {

    let amount =document.getElementById('bill').value;
    let perc=document.getElementById('percentage').value;
    let person=document.getElementById('split').value;

    /// check if the totalBill is empty
    if(amount ==''||perc==''||amount==0){
        alert('Please enter bill amount greater than 0 ');
        return;
    }
if(person==""){
    person=1;
}
 const totaltip= document.getElementById('Total').value= (amount/100)*perc;
    document.getElementById('perperson').value=totaltip/person;

}

    
    const reset =() => {
    window.location.reload();
}
