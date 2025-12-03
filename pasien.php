<?php include "koneksi.php"; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Data Pasien</title>
    <style>
        table { width: 90%; margin: auto; border-collapse: collapse; }
        th, td {
            border: 1px solid #ccc; padding: 10px; text-align: center;
        }
        th { background: #007bff; color: white; }
    </style>
</head>
<body>

<h2 align="center">Data Pasien Terdaftar</h2>

<table>
    <tr>
        <th>No</th>
        <th>Nama</th>
        <th>JK</th>
        <th>Umur</th>
        <th>Alamat</th>
        <th>Keluhan</th>
        <th>Dokter</th>
        <th>No Antrian</th>
    </tr>

    <?php
    $no = 1;
    $data = mysqli_query($conn, "SELECT * FROM pasien ORDER BY id DESC");
    while ($d = mysqli_fetch_array($data)) {
    ?>
    <tr>
        <td><?= $no++; ?></td>
        <td><?= $d['nama']; ?></td>
        <td><?= $d['jk']; ?></td>
        <td><?= $d['umur']; ?></td>
        <td><?= $d['alamat']; ?></td>
        <td><?= $d['keluhan']; ?></td>
        <td><?= $d['dokter']; ?></td>
        <td><b><?= $d['no_antrian']; ?></b></td>
    </tr>
    <?php } ?>
</table>

<br><center><a href="index.php">← Kembali</a></center>

</body>
</html>
