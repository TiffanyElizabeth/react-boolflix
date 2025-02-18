import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { AppDataProvider } from "./contexts/AppDataContext";

export default function App() {
  return (
    <AppDataProvider>
      <Header />
      <Main />
      <Footer />
    </AppDataProvider>
  )
}