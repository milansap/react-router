import "./App.css";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LogIn from "./components/navbar/LogIn";
import TryForFree from "./components/navbar/TryForFree";
import FirstContent from "./pages/news/components/FirstContent";
function App() {
  // const token = false;
  // if (!token) {
  //   return <>404NotFound</>;
  // }
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />}>
            <Route path="" element={<FirstContent />} />
            <Route path="page2" element={<h1>sd</h1>} />
            <Route path="page3" element={<h1>hhahhas</h1>} />
            <Route path="page4" element={<h1>hhahhas</h1>} />
            <Route path="page5" element={<h1>hhahhas</h1>} />
            <Route path="page6" element={<h1>hhahhas</h1>} />
            <Route path="page7" element={<h1>hhahhas</h1>} />
            <Route path="page8" element={<h1>hhahhas</h1>} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="free" element={<TryForFree />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
