function disp() {
    var strText = document.getElementById("tx1").value;
    var strText1 = document.getElementById("tx2").value;
    var strText2 = document.getElementById("tx3").value;
    var strText3 = document.getElementById("tx4").value;
    var num1 = document.getElementById("tx5").value;
    var e = document.getElementById("tps");
    var value = e.value;
    var strText5 = e.options[e.selectedIndex].text;
    var num2 = document.getElementById("tx6").value;

    var r1 = document.getElementById("r1");
    var r2 = document.getElementById("r2");

    var num3 = ((num1 * value) - (num1 / num2));
    var num5 = 720;
    var num6 = 360;
    var num4 = num3 / 2;
    var num7 = num4 + num6;
    var num8 = num3 + num5;

    // Start of the bill layout
    document.write("<center><table border='5px' rules='all' cellpadding='5px' width='80%'>");
    document.write("<tr bgcolor='linen'>");
    document.write("<td><img src='pic1.png' height='75' width='75'></td>");
    document.write("<td><h3><center>PROPERTY TAX PAYMENT</center></h3></td>");
    document.write("<td><h3><center><a href='home.html' style='text-decoration:none;'>HOME</a></center></h3></td>");
    document.write("<td><h3><center><a href='about.html' style='text-decoration:none;'>ABOUT</a></center></h3></td>");
    document.write("<td><h3><center><a href='example.html' style='text-decoration:none;'>CALCULATION</a></center></h3></td>");
    document.write("<td><h3><center><a href='gateway.html' style='text-decoration:none;'>PAYMENT</a></center></h3></td>");
    document.write("</tr>");
    document.write("</table>");
    
    document.write("<strong>ENTERED DETAILS:</strong><br>");

    document.write("<table border='10px' rules='all' cellpadding='10px' width='80%'>");
    document.write("<tr><td><strong>NAME:</strong></td><td>" + strText + "</td></tr>");
    document.write("<tr><td><strong>PHONE NO:</strong></td><td>" + strText1 + "</td></tr>");
    document.write("<tr><td><strong>HOUSE NO:</strong></td><td>" + strText2 + "</td></tr>");
    document.write("<tr><td><strong>AREA:</strong></td><td>" + strText3 + "</td></tr>");
    document.write("<tr><td><strong>SQUARE FEET:</strong></td><td>" + num1 + "</td></tr>");
    document.write("<tr><td><strong>USAGE:</strong></td><td>" + strText5 + "</td></tr>");
    document.write("<tr><td><strong>PLAN:</strong></td><td>" + (r1.checked ? r1.value + " Months" : r2.value + " Months") + "</td></tr>");
    document.write("<tr><td><strong>GARBAGE TAX:</strong></td><td>" + (r1.checked ? num6 : num5) + "</td></tr>");
    document.write("<tr><td><strong>AMOUNT:</strong></td><td>" + (r1.checked ? num7 : num8) + "</td></tr>");
    document.write("</table>");

    document.write("<br><br><h2>Total Bill Amount: ₹" + (r1.checked ? num7 : num8) + "</h2>");

    document.write("<p><strong>Go for the payment!</strong></p>");
    document.write("</center>");
}
