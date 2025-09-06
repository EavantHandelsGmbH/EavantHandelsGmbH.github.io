import { Link } from "react-router";

function Impressum() {
  return (
    <div className="container mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Impressum</h1>

      <p>
        <strong>Firmenname:</strong> EAVANT Handels GmbH
      </p>
      <p>
        <strong>Adresse:</strong> Meidlinger Hauptstraße 47/1, 1120 Wien
      </p>
      <p>
        <strong>Telefon:</strong> +43 667 3025558
      </p>
      <p>
        <strong>E-Mail:</strong>{" "}
        <a
          href="mailto:office@eavant.at"
          className="underline hover:text-gray-300"
        >
          office@eavant.at
        </a>
      </p>
      <p>
        <strong>Firmenbuchnummer:</strong> FN 633636 v
      </p>
      <p>
        <strong>Firmenbuchgericht:</strong> Handelsgericht Wien
      </p>
      <p>
        <strong>UID-Nummer:</strong> ATU12345678
      </p>
      <p>
        <strong>Aufsichtsbehörde:</strong> Magistrat der Stadt Wien
      </p>
      <p>
        <strong>Redaktionell verantwortlich:</strong> Max Mustermann
      </p>

      <h2 className="text-xl font-semibold mt-6">Gewerbeberechtigungen</h2>

      <div className="bg-gray-800 p-4 rounded-md space-y-2">
        <h3 className="font-bold">FG Kleintransporteure</h3>
        <p>
          Güterbeförderung mit Kraftfahrzeugen oder Kraftfahrzeugen mit
          Anhängern, deren höchst zulässiges Gesamtgewicht im
          grenzüberschreitenden Güterverkehr insgesamt 2.500 kg bzw. im
          innerstaatlichen Güterverkehr 3.500 kg nicht übersteigt
        </p>
        <p>
          <strong>Gewerberechtliche Geschäftsführung:</strong> Mohammed Waheed
          Sadek Fohiel
        </p>
        <p>
          <strong>GISA-Zahl:</strong> 38263439
        </p>
      </div>

      <div className="bg-gray-800 p-4 rounded-md space-y-2">
        <h3 className="font-bold">FG Entsorgungs- und Ressourcenmanagement</h3>
        <p>Sammeln und Behandeln von Abfällen und Abwässern</p>
        <p>
          <strong>Gewerberechtliche Geschäftsführung:</strong> Mohammed Waheed
          Sadek Fohiel
        </p>
        <p>
          <strong>GISA-Zahl:</strong> 38263583
        </p>
      </div>

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

export default Impressum;
