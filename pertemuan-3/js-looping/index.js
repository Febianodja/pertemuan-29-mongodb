// No.1
for(let i = 1 ; i <= 100 ; i++){
    document.write("User ke - "+ i);
    document.write("<br>");
}

// No.2
for(let j = 0 ; j < 20 ; j+=2){ /* j < 20 agar bisa mendapatkan penambahan nilai 10 kali */
    document.write(j);
    document.write("<br>");
}

// No.3
for(let k = 0 ; k <= 20 ; k++){
    if(k % 2 == 0){
        document.write(k + " GENAP");
    } else {
        document.write(k + " GANJIL");
    }
    document.write("<br>");
}

// No. 4
let count = 0;
while(confirm("Apakah anda akan mengulang?")){
    count++;
}
alert("Perulangan sudah dilakukan sebanyak " + count);

// No.5
let answer = "Impact Byte";
while(prompt("Sebutkan kepanjangan dari IB?") !== answer){

}
alert("Selamat jawaban kamu benar");