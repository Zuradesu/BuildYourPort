let nameInput;

document.addEventListener("DOMContentLoaded", () => {
    setupEventListeners(); // Panggil event listener setelah halaman termuat
    nameData(); // Muat nama ketika dokumen sepenuhnya dimuat
});

function setupEventListeners() {
    const submit = document.getElementById("submit");
    nameInput = document.getElementById("nameInput");

    if (submit) {
        submit.addEventListener("click", submitHandler); // Set event listener untuk tombol submit
    }
}

function submitHandler(event) {
    event.preventDefault(); // Prevent default form submission
    const name = nameInput.value.trim(); // Ambil nilai input dan hilangkan spasi

    if (name) { // Cek apakah input tidak kosong
        localStorage.setItem("name", name); // Simpan nama di local storage
        window.location.href = "port.html"; // Redirect ke halaman port.html
    } else {
        alert("Please enter a name."); // Jika input kosong, beri peringatan
    }
}

// Fungsi untuk menampilkan nama dari local storage
function nameData() {
    const storedName = localStorage.getItem("name"); // Ambil nama dari local storage
    const nameElement = document.getElementById("name"); // Ambil elemen span dengan ID 'name'

    if (storedName) {
        nameElement.textContent = storedName; // Tampilkan nama yang disimpan
    } else {
        nameElement.textContent = "Default Name"; // Tampilkan nama default jika tidak ada
    }
}
