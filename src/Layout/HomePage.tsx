import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // Cần cài lucide-react hoặc dùng icon khác

import Home from "../Components/Home";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Portfolio from "../Components/Portfolio";
import Companies from "../Components/Companies";
import ContactUs from "../Components/ContactUs";

const HomePage = () => {
  console.log("AboutMe component:", AboutMe);
  console.log("Skills component:", Skills);
  const location = useLocation();

  useEffect(() => {
    // Vì giờ đã chuyển sang điều hướng bằng URL sạch (/about, /skills)
    // Nếu bạn vô tình bấm vào link cũ có hash, nó vẫn sẽ cuộn.
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      {/* 1. Phần Hero/Giới thiệu chính */}
      <Home />

      {/* 2. Tóm tắt Giới thiệu bản thân */}
      <section className="relative group">
        <AboutMe />
        <div className="flex justify-center mt-[-40px] pb-10 relative z-10">
          <Link
            to="/about"
            className="group flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-md border border-purple-100 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition-all"
          >
            Tìm hiểu thêm về tôi{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* 3. Tóm tắt Kỹ năng */}
      <section className="bg-gray-50/50 py-10">
        <Skills />
        <div className="text-center mt-8">
          <Link
            to="/skills"
            className="text-purple-600 font-semibold hover:text-purple-800 underline underline-offset-4"
          >
            Xem chi tiết lộ trình kỹ thuật của tôi
          </Link>
        </div>
      </section>

      {/* 4. Dự án tiêu biểu (Portfolio) */}
      <section>
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold text-gray-800">Dự án nổi bật</h2>
        </div>
        <Portfolio />
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all"
          >
            Xem tất cả dự án
          </Link>
        </div>
      </section>

      {/* 5. Đối tác/Công ty */}
      <Companies />

      {/* 6. Liên hệ nhanh */}
      <section className="bg-purple-600 py-16 mt-10">
        <div className="max-w-4xl mx-auto text-center text-white px-6 mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Bạn có dự án cần thực hiện?
          </h2>
          <p className="opacity-90">
            Hãy gửi yêu cầu cho tôi, tôi sẽ phản hồi bạn trong vòng 24h làm
            việc.
          </p>
        </div>

        {/* Sử dụng component tại đây */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <ContactUs />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
