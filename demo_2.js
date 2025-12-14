// 1. Arrow Function
const greeting = (nama) => console.log(`Halo ${nama}, Selamat Siang.`);

// 2. Spread Operator
// Data awal (Dummy)
const dataNilai = {
    matkul: "Algoritma dan Pemrograman 1",
    nilai: 90,
    status: "Lulus"
};

// Data Tambahan
const dataTambahan = { semeste: 2, aktif: true };

// Menggabungkan dataNilai dengan dataTambahan
const dataMahasiswa = { ...dataNilai, ...dataTambahan };
console.log("Data Mahasiswa:", dataMahasiswa);