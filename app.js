//const fs = require('fs')
//fs.writeFileSync('catatan.txt', 'Nama Saya Rani')
//fs.appendFileSync('catatan.txt', 'Saya tinggal di Padang')

//const catatan = require('./catatan.js')
//const pesan = catatan()
//console.log(pesan)

//const validator = require('validator')
//const ambilCatatan = require('./catatan.js')
//const pesan = ambilCatatan()
//console.log(pesan)
//console.log(validator.isURL('https://proska.com'))

//const ambilCatatan = require('./catatan.js')

//const command = process.argv[5]
//console.log(process.argv)

//if (command === 'tambah') {
//console.log('Tambah Catatan')
//} else if (command === 'hapus') {
//console.log('Hapus Catatan')
//}

const yargs = require('yargs');
const catatan = require('catatan.js');

yargs.version('10.1.0');

yargs.command({
  command: 'tambah',
  describe: 'Tambah sebuah catatan baru',
  builder: {
    judul: {
      describe: 'Judul catatan',
      demandOption: true,
      type: 'string'
    },
    isi: {
      describe: 'Isi catatan',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    catatan.tambahCatatan(argv.judul, argv.isi)
  }
});

yargs.command({
  command: 'hapus',
  describe: 'Hapus catatan',
  handler: function () {
    console.log('Catatan berhasil dihapus');
  }
});

// Perintah untuk menampilkan list semua catatan
yargs.command({
  command: 'list',
  describe: 'Tampilkan list semua catatan',
  handler: function () {
    const semuaCatatan = catatan.getSemuaCatatan();
    console.log('List Catatan:');
    semuaCatatan.forEach((catatan) => {
      console.log(catatan);
    });
  }
});

// Perintah untuk membaca sebuah catatan
yargs.command({
  command: 'baca',
  describe: 'Baca sebuah catatan',
  handler: function () {
    console.log('Membaca sebuah catatan');
  }
});

// Ganti baris terakhir dengan yargs.parse()
yargs.parse();