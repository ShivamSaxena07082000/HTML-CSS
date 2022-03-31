function sm()
{
    var1 = parseInt(document.getElementById("f_no").value);
    var2 = parseInt(document.getElementById("s_no").value);
    var3 = var1 + var2;
    document.getElementById("sum_no").value = var3;
}
function sb()
{
    var1 = parseInt(document.getElementById("f_no").value);
    var2 = parseInt(document.getElementById("s_no").value);
    var3 = var1 - var2;
    document.getElementById("sum_no").value = var3;
}
function ml()
{
    var1 = parseInt(document.getElementById("f_no").value);
    var2 = parseInt(document.getElementById("s_no").value);
    var3 = var1 * var2;
    document.getElementById("sum_no").value = var3;
}
function dv()
{
    var1 = parseInt(document.getElementById("f_no").value);
    var2 = parseInt(document.getElementById("s_no").value);
    var3 = var1 / var2;
    document.getElementById("sum_no").value = var3;
}