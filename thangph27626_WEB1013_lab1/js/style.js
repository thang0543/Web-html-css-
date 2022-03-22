var mang = new Array(100);


var n = prompt("nhap so luong: ")

for(var i =0 ; i< n; i++){
mang[i] = prompt("nhap so so: ")
}
for(var i =0 ; i< n; i++){
    document.write(" cac so vua nhap la: "+mang[i])
    
}

var x = prompt("nhap so can tim: ")


for(var i =0 ; i< n; i++){
    if(x == mang[i]){
        document.write(" \n vi tri la: "+i)
        break;
    }
    
}