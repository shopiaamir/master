function makeArray() {
for (i = 0; i<makeArray.arguments.length; i++)
this[i + 1] = makeArray.arguments[i];
}
var months = new makeArray('Januari','Februari','Maret','April','Mei',
'Juni','Juli','Agustus','September','Oktober','November','Desember');
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
document.write(months[month]+ " "  + year);