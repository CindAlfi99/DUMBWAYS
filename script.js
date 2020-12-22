function ceknilai(kodBar, diskon) {
    var diskon = 450000 * diskon;
    let products = [{
        kodeBarang: "KD0023",
        NamaBarang: "Laptop Asus ROG",
        Harga: "15000000",
    }, {
        kodeBarang: "C42212",
        NamaBarang: "Iphone 12",
        Harga: "12000000",
    }, {
        kodeBarang: "D90312",
        NamaBarang: "Xiaomi Pocophone",
        Harga: "7000000",
    }, {
        kodeBarang: "HI2020",
        NamaBarang: "Playstation 5",
        Harga: "15000000",
    }];
    //     // kodBar = products;
    //     // let product4 = products["Harga"];


    //     // if (products["kodeBarang"] == kodBar[i]) { console.log(products[i]); };
    // for (var i = 0; i < kodBar.length; i++) {

    //     products.forEach(function(product) {
    //         if (kodBar[i] === product.kodeBarang) {
    //             console.log(product);
    //         }
    //     });

    // }
    var a = 0;
    var awal = 0;
    let cart = [];
    let pcs = 0;
    for (var j = 0; j < products.length; j++) {
        for (var i = 0; i < kodBar.length; i++) {
            if (products[j]["kodeBarang"] == kodBar[i]) {
                // console.log(products[j]);
                // console.log(a++)

                cart.push(products);

                console.log('Nama Barang :' + products[j]['NamaBarang'] + ' ' + 'Harga:' + products[j]['Harga'] + 'pcs');

                a += parseInt(products[j]['Harga']);
                awal++;
            }

        }


    }
    console.log('Jumlah ' + a);
    console.log('Diskon ' + diskon);
    console.log('=============================')
    console.log('Total ' + (a - diskon))
    console.log('Item ' + awal);

}


ceknilai(["HI2020", "KD0023", "KD0023"], 10);

// function ceknilai(nilai) {
//     let awal = 0;
//     let lulus = 0;
//     let tidakLulus = 0;
//     for (var i = 0; i < nilai.length; i++) {

//         if (nilai[i] < 65) {
//             tidakLulus++;
//             console.log(nilai[i] + ' => ' + 'tidak lulus');
//             console.log(' ');

//         }
//         if (nilai[i] >= 65) {
//             lulus++;
//             console.log(nilai[i] + ' => ' + 'lulus');
//             console.log(' ');
//         }
//         awal += nilai[i] / nilai.length;
//     }
//     console.log('Jumlah Nilai yang disubmit: ' + nilai.length);
//     console.log('Rata rata nilai: ' + awal);
//     console.log('Lulus: ' + lulus);
//     console.log('Tidak Lulus: ' + tidakLulus);


// }
// ceknilai([20, 50, 65, 70, 80, 80, 30, 55, 75]);

// for (var i = 0; i < 3; i++) {
//     for (var m = 0; m < i; m++) {

//         console.log('*')


//     }
//     console.log(' ');
// }
// Masukkan nilai N: 5
// *****
// ****
// ***
// **
// *