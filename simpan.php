<?php
include "koneksi.php";

$nama    = $_POST['nama'];
$jk      = $_POST['jk'];
$umur    = $_POST['umur'];
$alamat  = $_POST['alamat'];
$keluhan = $_POST['keluhan'];
$dokter  = $_POST['dokter'];

// Ambil nomor antrian terakhir
$q = mysqli_query($conn, "SELECT MAX(no_antrian) AS antrian FROM pasien");
$d = mysqli_fetch_array($q);
$no_antrian = $d['antrian'] + 1;

$sql = "INSERT INTO pasien (nama, jk, umur, alamat, keluhan, dokter, no_antrian)
        VALUES ('$nama', '$jk', '$umur', '$alamat', '$keluhan', '$dokter', '$no_antrian')";

if (mysqli_query($conn, $sql)) {
    echo "
        <script>
            alert('Pendaftaran Berhasil! Nomor Antrian Anda: $no_antrian');
            window.location='antrian.php';
        </script>
    ";
} else {
    echo "Error: " . mysqli_error($conn);
}
?>
