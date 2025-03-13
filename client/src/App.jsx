import { Route, Routes } from "react-router-dom";
import TareasPage from "./pages/TareasPage";
import TareaForm from "./pages/TareaForm";
import NotFound from "./pages/NoEncontrado";
import Navbar from "./components/Navbar";
import { TareaContextProvider } from "./context/TareaProvider";

function App() {
  return (
      <TareaContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<TareasPage />} />
          <Route path="/new" element={<TareaForm />} />
          <Route path="/edit/:id" element={<TareaForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TareaContextProvider>
  );
}

export default App;
