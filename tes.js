function hitung(A, B, C, D) {
    // hitung km
    let liter = 7000;
    let km = 2.5;
    if (A == 'Toko') {
        let perjalanan = 2;
        let BerapaLiter = 2 / km;
        let TotalBensin = (2 / km) * liter;
        console.log('Toko - Tempat A' + '= ' + perjalanan + ' KM' + '|' + 'Rp ' + TotalBensin + '|' + BerapaLiter + ' liter');

    }

    if (B == 'Tempat A') {
        let perjalanan = 9;
        let BerapaLiter = perjalanan / km;
        let TotalBensin = (perjalanan / km) * liter;
        console.log('Tempat A - Tempat D' + '= ' + perjalanan + ' KM' + '|' + 'Rp ' + TotalBensin + '|' + BerapaLiter + ' liter');


    }
    if (C == 'Tempat D') {
        let perjalanan = 9;
        let BerapaLiter = perjalanan / km;
        let TotalBensin = (perjalanan / km) * liter;
        console.log('Tempat D - Tempat C' + '= ' + perjalanan + ' KM' + '|' + 'Rp ' + TotalBensin + '|' + BerapaLiter + ' liter');
    }
    if (D == 'Tempat C') {
        let perjalanan = 8.5;
        let BerapaLiter = perjalanan / km;
        let TotalBensin = (perjalanan / km) * liter;
        console.log('Tempat C - Toko' + '= ' + perjalanan + ' KM' + '|' + 'Rp ' + TotalBensin + '|' + BerapaLiter + ' liter');
    }

};
hitung();