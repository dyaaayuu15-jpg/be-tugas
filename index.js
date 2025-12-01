// const express = require("express");
// const db = require("./models");

// const adminRoutes = require("./src/routes/admin");
// const pasienRoutes = require("./src/routes/pasien");
// const dokterRoutes = require("./src/routes/dokter");
// const antrianRoutes = require("./src/routes/antrian");

// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/admin", adminRoutes);
// app.use("/pasien", pasienRoutes);
// app.use("/dokter", dokterRoutes);
// app.use("/antrian", antrianRoutes);

// db.sequelize.sync().then(() => {
//   app.listen(3000, () =>
//     console.log("Server berjalan di http://localhost:3000")
//   );
// });

require("dotenv").config();
const express = require("express");
const db = require("./models");

const adminRoutes = require("./src/routes/admin");
const pasienRoutes = require("./src/routes/pasien");
const dokterRoutes = require("./src/routes/dokter");
const antrianRoutes = require("./src/routes/antrian");

const cors = require("cors");
const app = express();

// Gunakan CORS dengan origin dari env
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
  })
);

app.use(express.json());

// Routes
app.use("/admin", adminRoutes);
app.use("/pasien", pasienRoutes);
app.use("/dokter", dokterRoutes);
app.use("/antrian", antrianRoutes);

// Sync DB dan start server
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`Server berjalan di http://localhost:${PORT}`)
  );
});
