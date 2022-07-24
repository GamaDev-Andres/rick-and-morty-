import { Footer } from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
