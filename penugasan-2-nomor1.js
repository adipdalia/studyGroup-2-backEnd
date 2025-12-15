// 1. Simulasi Pembuatan Teh (Konsep Promise)
// Buatlah fungsi buatTeh yang mengembalikan sebuah Promise.
// Gunakan setTimeout selama 2000ms (2 detik) untuk mensimulasikan proses merebus air.
// Jika parameter input adalah "Gula Batu", maka Promise Resolved dengan pesan "Teh Gula Batu Siap".
// Jika tidak, Promise Rejected dengan pesan "Maaf, gula habis".

// Modul untuk membaca input dari terminal
const readline = require('readline');

// Jenis interface untuk input dan output
const rl = readline.createInterface({
    input: process.stdin, // Input dari keyboard
    output: process.stdout // Output ke terminal
});

// kode warna
const warna = {
    reset: "\x1b[0m",      // balikin warna
    terang: "\x1b[1m",     // Bold
    merah: "\x1b[31m",     // Error
    hijau: "\x1b[32m",     // Sukses
    kuning: "\x1b[33m",    // tunggu 2 detik
    cyan: "\x1b[36m",      // border
    putih: "\x1b[37m",     // teks 
};

// Stok gula yang tersedia
let stokGula = {
    "Gula Batu": 5,
    "Gula Pasir": 5,
    "Gula Merah": 0
};

// Fungsi buatTeh yang mengembalikan Promise
const buatTeh = (gula) => { 
    return new Promise ((resolve, reject) => {
        console.log(`\n${warna.kuning}⌛ Sedang memeriksa stok dan merebus air... (Tunggu 2 detik)`);

        setTimeout(() => {
            // ambil daftar nama gula yang ada
            const daftarGula = Object.keys(stokGula);
            // ubah input user jadi lowercase dan cari di daftar gula   
            const gulaDitemukan = daftarGula.find(item => item.toLowerCase() === gula.toLowerCase());
            // Cek apakah gula ditemukan
            if (!gulaDitemukan) {
                reject(`Maaf, kami tidak menjual "${gula}".`);
            } 
            else if (stokGula[gulaDitemukan] > 0) {
                stokGula[gulaDitemukan]--; 
                resolve(`Teh ${gulaDitemukan} Siap! (Sisa stok: ${stokGula[gulaDitemukan]})`);
            } 
            else {
                reject(`Maaf, stok "${gulaDitemukan}" sudah habis.`);
            }
        }, 2000);
    });
};  

const jalankanProgram = async () => {
    // bersihin layar terminal
    console.clear(); 
    // buat tampilan menu
    const menuTampilan = `
${warna.cyan}=========================================${warna.reset}
   ${warna.hijau}${warna.terang}🍵  SELAMAT DATANG DI KEDAI TEH  🍵${warna.reset}
${warna.cyan}=========================================${warna.reset}
Pilihan Gula Tersedia:
   🪨   Gula Batu${warna.reset}
   🍚  Gula Pasir${warna.reset}
   🏺  Gula Merah${warna.reset}
${warna.cyan}=========================================${warna.reset}`;
    // tampilin menu
    console.log(menuTampilan);
    // minta input user 
    const pertanyaan = `${warna.terang}👉 Masukkan pilihan Anda: ${warna.reset}`;
    // try-catch 
    rl.question(pertanyaan, async (jawaban) => {
        try {
            const hasil = await buatTeh(jawaban); //nunggu 2 detik dari buatTeh
            console.log(`\n${warna.hijau}✅ ${hasil}${warna.reset}`); 
        } catch (error) { // buatTeh kirim reject   
            console.log(`\n${warna.merah}❌ ${error}${warna.reset}`);
        } finally { // tutup interface readline 
            rl.close();
        }
    });
};

jalankanProgram(); // tombol start