var calc = function(){
    var bill = Number(document.getElementById('bill').value)
    var split = Number(document.getElementById('person').value)

    let tip = bill * 0.05;
    let totalbill= bill+tip;
    var contribution = totalbill/split;
    document.getElementById('tip').innerHTML +=" ₹ " + Number(tip).toFixed(2);
    document.getElementById('total').innerHTML += " ₹ " + Number(totalbill).toFixed(2);
    document.getElementById('contri').innerHTML += " ₹" + Number(contribution).toFixed(2);
}