// No.1
let position = "CTO";
if(position === "CTO"){
    console.log("Jika saya seorang " + position + " maka saya bertanggung jawab atas pengembangan teknologi dalam perusahaan.");
} else if(position === "HR"){
    console.log("Jika saya seorang " + position + " maka tugas saya ada melakukan rekrutmen pegawai baru.");
} else {
    console.log("Silahkan isi posisi");
}

// No.2
let angkaA = 20;
let angkaB = 78;
if(angkaA > angkaB){
    console.log("Angka A lebih besar dari Angka B");
} else {
    console.log("Angka B lebih besar dari Angka A");
}

// No.3
let angkaHari = 12;
switch(angkaHari){   
    case 1: console.log("Minggu"); break;
    case 2: console.log("Senin"); break;
    case 3: console.log("Selasa"); break;
    case 4: console.log("Rabu"); break;
    case 5: console.log("Kamis"); break;
    case 6: console.log("Jumat"); break;
    case 7: console.log("Sabtu"); break;
    default: console.log("Input angka 1-7");
}

// No.4
let movement = "LEFT";
switch(movement){
    case "UP" : console.log("Karakter berjalan ke atas"); break;
    case "RIGHT" : console.log("Karakter berjalan ke kanan"); break;
    case "BOTTOM" : console.log("Karakter berjalan ke bawah"); break;
    case "LEFT" : console.log("Karakter berjalan ke kiri"); break;
    default: console.log("Input arah yang dituju");
}

