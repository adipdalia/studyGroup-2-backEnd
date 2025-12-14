// 3. Fungsi Async
const getDataMahasiswa = async (id) => {
    // try-catch
        try{
            console.log("Proses ambil data dari server");

            // await-fetch
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

            if (!response.ok){
                throw new Error("Mahasiswa tidak ditemukan di dataabase kampus!");
            }

            const dataAPI = await response.json();
            // Destructuring

            const {name, email, phone} = dataAPI;

            console.log("Data berhasil didapatkan!");

            return {
                id: id,
                namaLengkap: name,
                email: email,
                kontak: phone,
            }

    } catch (error) {
        console.log("terjadi Error:", error.message);
    } finally { 
        console.log("Request Selesai")
    }
};

const main = async () => {
    const sukses = await getDataMahasiswa(1);
    console.log("Hasil Fetch Data Mahasiswa:", sukses);

    const gagal = await getDataMahasiswa(999);
    console.log("Hasil Fetch Data Mahasiswa:", gagal);
};

main();