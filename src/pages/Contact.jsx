import Button from "../components/UI/Button";

export default function ContactPage() {
  return (
    <section className="py-24 bg-blue-900 text-white min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Info */}
          <div className="md:w-1/2 bg-blue-800 p-12 flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-extrabold text-white">
              Kontaktieren Sie uns
            </h1>
            <p className="text-lg text-blue-100">
              Schreiben Sie uns Ihr Anliegen oder Ihre Anfrage, wir melden uns
              schnellstmöglich zurück.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 p-8 md:p-12 bg-white">
            <form
              action="https://formsubmit.co/office@eavant.at"
              method="POST"
              className="flex flex-col gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Nachricht"
                required
                className="p-4 rounded-xl h-40 resize-none border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
              <Button variant="secondary" className="w-full py-4 text-lg">
                Absenden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
