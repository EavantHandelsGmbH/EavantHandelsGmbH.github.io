import { Link } from "react-router";

function Datenschutz() {
  return (
    <div className="container mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Datenschutz / Privacy Policy</h1>

      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
        Nachfolgend informieren wir Sie, wie wir mit Ihren Daten umgehen.
      </p>

      <h2 className="text-xl font-semibold mt-4">1. Verantwortlicher</h2>
      <p>
        <strong>EAVANT Handels GmbH</strong>
      </p>
      <p>Meidlinger Hauptstraße 47/1, 1120 Wien</p>
      <p>Telefon: +43 664 5295689</p>
      <p>
        E-Mail:{" "}
        <a
          href="mailto:office@eavant.at"
          className="underline hover:text-gray-300"
        >
          office@eavant.at
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-4">
        2. Erhebung und Verarbeitung personenbezogener Daten
      </h2>
      <p>
        Wir speichern keine personenbezogenen Daten automatisch oder über
        Tracking-Tools. Die einzige Datenverarbeitung erfolgt, wenn Sie uns über
        das Kontaktformular Informationen übermitteln.
      </p>
      <p>
        Die von Ihnen im Formular eingegebenen Daten werden direkt an{" "}
        <strong>FormSubmit</strong> übermittelt, ohne dass wir diese speichern
        oder weiterverarbeiten. FormSubmit ist für die Verarbeitung
        verantwortlich.
      </p>

      <h2 className="text-xl font-semibold mt-4">3. Cookies und Tracking</h2>
      <p>
        Unsere Website verwendet keine Cookies, Web Beacons oder andere
        Tracking-Technologien. Wir setzen keine Analytik-Tools ein.
      </p>

      <h2 className="text-xl font-semibold mt-4">4. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder
        Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Da wir
        keine Daten speichern, ist dies in der Regel nicht erforderlich. Bei
        Fragen können Sie uns jederzeit unter{" "}
        <a
          href="mailto:office@eavant.at"
          className="underline hover:text-gray-300"
        >
          office@eavant.at
        </a>{" "}
        kontaktieren.
      </p>

      <h2 className="text-xl font-semibold mt-4">5. Externe Dienste</h2>
      <p>
        Das Kontaktformular nutzt <strong>FormSubmit</strong> zum Versand Ihrer
        Nachricht. Wir haben keinen Einfluss auf die Datenspeicherung oder
        Verarbeitung durch FormSubmit. Bitte beachten Sie die
        Datenschutzbestimmungen von FormSubmit.
      </p>

      <p className="mt-6">
        Für weitere Informationen besuchen Sie bitte unsere{" "}
        <Link to="/" className="underline hover:text-gray-300">
          Startseite
        </Link>
        .
      </p>
    </div>
  );
}

export default Datenschutz;
