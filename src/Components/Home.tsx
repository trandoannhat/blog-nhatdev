import { AppText } from "../constants";
import { homeImage } from "../assets";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="flex p-[20px] md:px-20 justify-between flex-col md:flex-row"
    >
      {/* Left content */}
      <div className="flex w-full flex-col items-start justify-center">
        {/* Hello */}
        <h1 className="text-[35px] md:text-[40px] font-bold">
          {AppText.hello}
        </h1>

        {/* I am */}
        <div className="flex items-center flex-wrap">
          <h1 className="text-[35px] md:text-[40px] font-bold mr-3">
            {AppText.Iam}
          </h1>

          <div className="text-[35px] md:text-[40px] font-bold text-purple-600">
            <Typewriter
              options={{
                strings: [
                  AppText.RahulSanap,
                  AppText.FrontedDeveloper,
                  AppText.UIUXDesigner,
                  AppText.BackendDeveloper,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        {/* Description */}
        <p className="my-5 text-gray-400 max-w-[520px] leading-relaxed">
          Tôi là lập trình viên web với niềm đam mê xây dựng{" "}
          <strong>website, hệ thống quản trị</strong> và{" "}
          <strong>ứng dụng web hiện đại</strong>.
          <br />
          Kinh nghiệm làm việc với React, TypeScript, Tailwind CSS và backend
          .NET / NodeJS.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          {/* Xem dự án */}
          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold
              hover:bg-purple-700 transition duration-300"
          >
            🚀 Xem dự án
          </Link>

          {/* Liên hệ */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border-2 border-purple-600
              text-purple-600 font-semibold
              hover:bg-purple-600 hover:text-white transition duration-300"
          >
            📩 Liên hệ
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full flex justify-center mt-10 md:mt-0">
        <img
          src={homeImage}
          alt="Home illustration"
          className="w-[220px] md:w-[320px] animate-fade-in"
        />
      </div>
    </section>
  );
};

export default Home;
