<?php
$hostname = "localhost";
$database = "db_klinik";
$username = "root";
$password = "";
// create connection
$conn = mysqli_connect($hostname, $username, $password, $database);
// check connection
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
echo "Koneksi Berhasil";
//mysqli_close($conn);
?>