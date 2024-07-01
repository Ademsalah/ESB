require("dotenv").config();
const express = require("express");
const clientRoutes = require("./routes/clientRoutes");
const workerRoutes = require("./routes/workerRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authAdminRoutes = require("./routes/authAdminRoutes");
const authenticateToken = require("./middleware/authMiddleware");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(clientRoutes);
app.use(workerRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(authAdminRoutes);


app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);