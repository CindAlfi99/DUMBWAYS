function hitungkembalian(a, b) {
    let kembalian = a - b;
    console.log(`Uang dibayar : Rp. ${a} `);
    console.log(`Total Bayar : Rp. ${b} `);
    console.log('===================================================');
    let pecahan10 = kembalian / 10000;
    pecahan10 = Math.floor(pecahan10);
    let hasil = kembalian - 10000 * pecahan10;
    let hasil5000 = hasil / 5000;
    hasil5000 = Math.floor(hasil5000);
    console.log(`uang pecahan Rp.10.000 sebanyak ${pecahan10} lembar`);
    //5000 an
    let hasilpecahan500 = hasil - 5000;
    let pecahan500 = hasilpecahan500 / 500 * -1;
    pecahan500 = Math.floor(pecahan500);
    let hasil_pecahan500 = hasil - 5000 * pecahan500;
    console.log(`Uang pecahan Rp.5000 sebanyak ${hasil5000} lembar `);
    console.log(`Uang pecahan Rp.500 sebanyak ${pecahan500} lembar `);
    // console.log(`Uang pecahan Rp.100 sebanyak ${pecahansisa} lembar `);
    console.log('===================================================');
    console.log(`Kembalian Rp. ${kembalian}`);
    console.log('Terbilang : Tujuh puluh lima ribu rupiah');
}
hitungkembalian(150000, 50000);


function cariNilaiTeratas(a) {
    let ceknilai = a;
    let array = [];
    let bilGenap = ceknilai.map(cek => {

        let genap = cek % 2 === 1;
        if (genap == true) {


            array.push(cek);



        }

    });

    //mencegah nilai yg sama
    const unique = array.filter((element, index) => {

        return array.indexOf(element) === index;

    });
    // mengurutkan nilai dengan sort

    let urutArray = unique.sort(function(a, b) {
        return a - b;
    });

    let fixUrut = urutArray.reverse()
    console.log(fixUrut);
    console.log(`Nilai tertinggi pertama : ${fixUrut[0]} `)
    console.log(`Nilai tertinggi kedua : ${fixUrut[1]} `)
    console.log(`Nilai tertinggi ketiga : ${fixUrut[2]} `)
}
cariNilaiTeratas([10, 40, 40, 6, 2, 6, 8, 9, 21, 20, 14, 3, 6, 11, 1, 1, 2, 3, 4, 6, 8, 9, 2, 100, 5, 6, 81, 81, 2]);


function gambarPola(a) {
    a = ['D', 'U', 'M', 'B', 'W', 'A', 'Y', 'S'];
    let forEach = a.forEach((b) => {

        let spasi = '';
        for (let i = 0; i < 8; i++) {

            console.log(b + spasi);
        }
    })

}
gambarPola(7);