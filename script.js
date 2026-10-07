function hitungBerat() {

    let nama = document.getElementById("nama").value;
    let tinggi = parseFloat(document.getElementById("tinggi").value);
    let berat = parseFloat(document.getElementById("berat").value);

    // Validasi input
    if (nama === "" || isNaN(tinggi) || isNaN(berat)) {
        document.getElementById("hasil").innerHTML =
            "Mohon isi semua data dengan benar.";
        return;
    }

    if (tinggi <= 0 || berat <= 0) {
        document.getElementById("hasil").innerHTML =
            "Tinggi dan berat badan harus lebih dari 0.";
        return;
    }

    // Mengubah tinggi dari cm menjadi meter
    let tinggiMeter = tinggi / 100;

    // Menghitung BMI
    let bmi = berat / (tinggiMeter * tinggiMeter);

    // Perkiraan berat ideal menggunakan rentang BMI 18.5 - 24.9
    let beratIdealMin = 18.5 * tinggiMeter * tinggiMeter;
    let beratIdealMax = 24.9 * tinggiMeter * tinggiMeter;

    let kategori;

    if (bmi < 18.5) {
        kategori = "Berat badan kurang";
    } else if (bmi < 25) {
        kategori = "Berat badan normal";
    } else if (bmi < 30) {
        kategori = "Berat badan berlebih";
    } else {
        kategori = "Obesitas";
    }

    document.getElementById("hasil").innerHTML =
        "<strong>Hasil untuk " + nama + "</strong><br><br>" +
        "BMI: " + bmi.toFixed(2) + "<br>" +
        "Kategori: " + kategori + "<br>" +
        "Rentang berat badan berdasarkan BMI 18.5–24.9: " +
        beratIdealMin.toFixed(1) + " - " +
        beratIdealMax.toFixed(1) + " kg";
}