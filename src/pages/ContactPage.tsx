import { AppText } from "../constants";

const ContactPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        {AppText.Contact} <span className="text-purple-600">{AppText.Us}</span>
      </h1>

      <p className="text-center text-gray-500 max-w-xl mx-auto mb-12">
        Nếu bạn có nhu cầu hợp tác, trao đổi công việc hoặc cần tư vấn kỹ thuật,
        đừng ngần ngại liên hệ với tôi qua form bên dưới.
      </p>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-lg">📧 Email</h3>
            <p className="text-gray-600">doannhatit@gmail.com</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">📍 Làm việc tại</h3>
            <p className="text-gray-600">Việt Nam</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">💼 Nghề nghiệp</h3>
            <p className="text-gray-600">
              Software Engineer · Frontend / Backend
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Nội dung liên hệ"
            rows={4}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold
            hover:bg-purple-700 transition"
          >
            Gửi liên hệ
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
