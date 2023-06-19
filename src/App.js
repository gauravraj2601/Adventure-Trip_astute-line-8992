import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
// import Home from "./Pages/Home";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
      <AllRoutes />
      </section>

      <section>
      <Footer />
      </section>
    </div>
  );
}
export default App;


// https://shy-blue-llama-sock.cyclic.app/trips