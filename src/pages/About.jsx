import Button from "../components/UI/Button";
import logo from "../assets/logo.png";

export default function AboutPage() {
  return (
    <>
      {/* Hero / About Section */}
      <section className="py-24 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image or illustration placeholder */}
          <div className="bg-blue-100 rounded-3xl h-80 md:h-full flex items-center justify-center text-blue-800 font-bold text-xl">
            <img src={logo} />
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold">Über uns</h1>
            <p className="text-lg leading-relaxed">
              Wir sind ein erfahrenes Transportunternehmen mit europaweiter
              Abdeckung. Mit unserem modernen Fuhrpark und flexiblen
              Lieferoptionen sorgen wir dafür, dass Ihre Waren sicher, pünktlich
              und zuverlässig ankommen.
            </p>
            <p className="text-lg leading-relaxed">
              Ob Expresslieferungen, regelmäßige Transporte oder
              maßgeschneiderte Lösungen – wir passen uns Ihren Bedürfnissen an
              und bieten stets transparente Kommunikation.
            </p>
            <p className="text-lg leading-relaxed">
              Unser Versprechen: Pünktlichkeit, höchste Qualität und ein
              Service, auf den Sie sich verlassen können. Ihre Zufriedenheit
              treibt uns an.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values / Features Section */}
      <section className="py-24 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-bold">Unsere Kernwerte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="font-bold text-xl mb-4">Zuverlässigkeit</h3>
              <p>
                Wir garantieren termingerechte Lieferungen und halten unsere
                Versprechen bei jedem Auftrag.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="font-bold text-xl mb-4">Transparenz</h3>
              <p>
                Bei uns wissen Sie jederzeit, wo sich Ihre Waren befinden –
                offene Kommunikation ist uns wichtig.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="font-bold text-xl mb-4">Flexibilität</h3>
              <p>
                Egal welche Anforderungen Sie haben, wir bieten individuelle
                Lösungen für jeden Transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold">
            Bereit für Ihre nächste Lieferung?
          </h2>
          <p>
            Kontaktieren Sie uns und lassen Sie uns gemeinsam die passende
            Lösung für Ihre Transporte finden.
          </p>
          <a href="/contact">
            <Button variant="secondary" className="px-8 py-4 text-lg">
              Jetzt kontaktieren
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
