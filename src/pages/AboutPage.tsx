import AboutMe from "../Components/AboutMe";

const AboutPage = () => {
  return (
    <div className="pt-20">
      {" "}
      {/* Thêm padding-top để không bị che bởi NavBar sticky */}
      <AboutMe />
    </div>
  );
};
export default AboutPage;
