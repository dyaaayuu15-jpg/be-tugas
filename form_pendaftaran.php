<?php include "koneksi.php"; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Pendaftaran Pasien</title>
    <style>
        body { font-family: Arial; background: #eef0f1; padding: 20px; }
        .box {
            width: 400px; margin: auto; background: #fff; padding: 20px;
            border-radius: 10px; box-shadow: 0 5px 10px rgba(0,0,0,0.2);
        }
        input, select, textarea {
            width: 100%; padding: 8px; margin: 6px 0;
            border: 1px solid #ccc; border-radius: 5px;
        }
        button {
            width: 100%; padding: 10px; background: #28a745; color: white;
            border: none; border-radius: 5px; cursor: pointer;
        }
        button:hover { background: #218838; }
    </style>
</head>
<body>

<div class="box">
    <h2 align="center">Form Pendaftaran Pasien</h2>

    <form action="simpan.php" method="POST">

        <label>Nama Pasien</label>
        <input type="text" name="nama" required>

        <label>Jenis Kelamin</label>
        <select name="jk" required>
            <option value="">-- Pilih --</option>
            <option>Laki-laki</option>
            <option>Perempuan</option>
        </select>

        <label>Umur</label>
        <input type="number" name="umur" required>

        <label>Alamat</label>
        <textarea name="alamat" required></textarea>

        <label>Keluhan</label>
        <textarea name="keluhan" required></textarea>

        <label>Pilih Dokter</label>
        <select name="dokter" required>
            <option value="">-- Pilih Dokter --</option>
            <option>dokter umum</option>
            <option>dokter gigi</option>
            <option>dokter anak</option>
        </select>

        <button type="submit">Daftar</button>

        <br><br>
        <a href="index.php">← Kembali ke Dashboard</a>
    </form>
</div>

</body>
</html>
