import { portfolio } from "../constants";

type PortfolioItem = {
  id: number;
  title: string;
  type: string;
  desc: string;
  imageUrl: string;
};

const ProjectsPage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Các dự án của tôi
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolio.map((item: PortfolioItem) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[200px] object-cover"
            />

            <div className="p-5">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>

              <span className="inline-block mt-3 text-xs px-3 py-1 bg-purple-100 text-purple-600 rounded-full">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
