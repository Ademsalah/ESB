import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./components/context/AuthContext";
import "./App.css";
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/dashbord/Dashbord.jsx";
import Clients from "./components/clients/Clients.jsx";
import Workers from "./components/workers/Workers.jsx";
import Products from "./components/products/Products.jsx";
import AddProduct from "./components/adding/AddProduct.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import ProductDetails from "./components/products/ProductDetails.jsx";
function App() {
  const [data, setData] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [clients, setClients] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        console.log(res.data, "products");
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3000/workers")
      .then((res) => {
        console.log(res.data, "workers");
        setWorkers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3000/clients")
      .then((res) => {
        console.log(res.data, "clients");
        setClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);
  return (
    <>
      <Router>
        <Navbar />
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <Dashboard data={data} workers={workers} clients={clients} />
              }
            />
            <Route path="/clients" element={<Clients clients={clients} />} />
            <Route path="/workers" element={<Workers workers={workers} />} />
            <Route path="/products" element={<Products products={data} />} />
            <Route
              path="/add"
              element={<AddProduct refresh={refresh} setRefresh={setRefresh} />}
            />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
