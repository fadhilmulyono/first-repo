let tarif1 = 4000
let tarif2 = 1000

let jamMasuk = prompt('Jam masuk: ')
let jamKeluar = prompt('Jam keluar: ')
do{
    jamKeluar = prompt('Jam keluar: ')
}while(parseInt(jamKeluar) < parseInt(jamMasuk))

let lamaParkir = jamKeluar - jamMasuk

let tarif = 0
if(lamaParkir <= 4){
    tarif = tarif1
} else if(lamaParkir > 4){
    tarif = tarif1 + ((lamaParkir - 4) * tarif2)
}

alert(`Total Biaya Parkir adalah ${tarif}`)