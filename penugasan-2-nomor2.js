// 2. Async/Await & Try-Catch (Fetching Data)
// Gunakan API publik gratis (JSONPlaceholder) untuk mengambil data "Todos".
// Buat fungsi async bernama getTodo().
// Gunakan await fetch('https://jsonplaceholder.typicode.com/todos/1').
// Tampilkan judul todo (title) di console.
// Bungkus dengan try-catch. Untuk mengetes catch, coba ubah URL menjadi URL yang salah (typo).

// kode warna
const warna = {
    reset: "\x1b[0m",      // balikin warna
    terang: "\x1b[1m",     // Bold
    merah: "\x1b[31m",     // Error
    kuning: "\x1b[33m",    // await 
    hijau: "\x1b[32m",     // Sukses
    putih: "\x1b[37m",     // teks 
};

// async untuk await 
const getTodo = async () => {
    console.log(`${warna.kuning}⌛ Sedang mengambil data...${warna.reset}`);
    try {
        // fetch data dari API, request ke server, await responnya  
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        // cek status response  
        if (!response.ok) {
            throw new Error(`${warna.merah}HTTP error! status: ${response.status} ${warna.reset}`);
        }

        // ubah data ke format JSON, await prosesnya    
        const data = await response.json();

        // tampilin hasil
        console.log(`\n${warna.hijau}✅ Todo Ditemukan: ${warna.reset}${warna.terang}${data.title}`);
    } catch (error) {   
        // tangkep error
        console.log(`\n${warna.merah}❌ Terjadi kesalahan: ${warna.reset}${warna.terang}${error.message}`);
        console.log(error.message);
    }
};

getTodo(); // jalankan fungsi