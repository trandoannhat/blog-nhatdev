import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

// CHỖ NÀY: Trỏ đúng vào file HomePage.tsx mà chúng ta vừa viết lúc nãy
import HomePage from "./Layout/HomePage";

import ProjectsPage from "./Components/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          {/* Bây giờ HomePage sẽ chứa: Home, AboutMe, Skills, Portfolio... */}
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
