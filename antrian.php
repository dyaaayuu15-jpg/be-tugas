<?php include "koneksi.php"; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Antrian Pasien</title>
    <style>
        body { font-family: Arial; text-align: center; background: #eef0f1; }
        .box {
            width: 300px; margin: auto; padding: 20px;
            background: #fff; border-radius: 10px;
            box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        }
        table { width: 90%; margin: 20px auto; border-collapse: collapse; }
        th, td { border: 1px solid #ccc; padding: 8px; }
        th { background: #007bff; color: white; }
    </style>
</head>
<body>

<h2>Antrian Pasien Klinik</h2>

<div class="box">
    <h3>Nomor Antrian Terakhir</h3>

    <?php
    $q = mysqli_query($conn, "SELECT MAX(no_antrian) as antri FROM pasien");
    $d = mysqli_fetch_array($q);
    ?>

    <h1 style="font-size: 50px;"><?= $d['antri']; ?></h1>
</div>

<br>

<h3>Daftar Antrian</h3>
<table>
    <tr>
        <th>No Antrian</th>
        <th>Nama</th>
        <th>Dokter</th>
    </tr>

    <?php
    $data = mysqli_query($conn, "SELECT * FROM pasien ORDER BY no_antrian ASC");
    while ($p = mysqli_fetch_array($data)) {
    ?>
    <tr>
        <td><b><?= $p['no_antrian']; ?></b></td>
        <td><?= $p['nama']; ?></td>
        <td><?= $p['dokter']; ?></td>
    </tr>
    <?php } ?>
</table>

<br><center><a href="index.php">← Kembali</a></center>

</body>
</html>
