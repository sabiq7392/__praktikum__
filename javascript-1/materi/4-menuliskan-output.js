// output dihasilkan/ditulis langsung ke browser console

/** Cara melihat output
 * klik kanan mouse di halaman website kalian
 * inspect
 * console
 */
console.log('sabiq muhammad');

// output dihasilkan/ditulis langsung ke body/web kita
document.write('sabiq'); 

// output dihasilkan/ditulis memunculkan popup
window.alert('hai Sabiq');

// out dihasilkan/ditulis langsung ke tag html
document.getElementsByTagName('h1').innerHTML = 'hai Sabiq';

// atau dengan variable =======
// STRING, NUMBER
let nama = 'sabiq muhammad'
let umur = 19;
let dataPribadi = nama + 19

console.log(nama);
document.write(angka);
window.alert(dataPribadi);




// ARRAY
let kendaraan = ['pesawat', 'mobil', 'motor'];

console.log(kendaraan[0]); // pesawat
document.write(kendaraan[0]);
window.alert(kendaraan[0]);




// OBJECT
let restoran = {
  nama: 'Mie Ayam Bangka Teras 18',
  alamat: 'Lembah Griya Indah, Blok D7/18',
  pemilik: 'Sabiq Muhammad',
  tahunBerdiri: 2021,
};

console.log(restoran.nama);
document.write(restoran.alamat);
window.alert(restoran.tahunBerdiri);

