import { AppText, socialNetwork } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-gray-200 mt-10 py-16 flex flex-col items-center px-6 md:px-80">
      {/* Social icons */}
      <div className="flex gap-6">
        {socialNetwork.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-110 opacity-80 hover:opacity-100"
          >
            <img
              src={item.logo}
              alt={item.name ?? "social icon"}
              className="w-[36px]"
            />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm mt-6 text-center">
        {AppText.copywriteText}
      </p>
    </footer>
  );
};

export default Footer;
