function temp()
{
    var celsius = document.getElementById("c").value;
    var f= (celsius * 9/5) + 32
    document.getElementById("f").value= f;

}

function weight()
{
    var kilo = document.getElementById("kilos").value;
    var p= kilo * 2.2;
    document.getElementById("pounds").value=p;
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}