import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white shadow-inner mt-10 static bottom-0">
      <div className="w-full max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Company Info */}
        <div className="flex flex-col space-y-2">
          <h2 className="font-bold text-lg">EAVANT Handels GmbH</h2>
          <p>office@eavant.at</p>
          <p>+43 676 3025558</p>
          <p>Meidlinger Hauptstraße 47/1, 1120 Wien</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <li>
            <Link
              to="/datenschutz"
              className="hover:text-gray-300 transition-colors"
            >
              Datenschutz
            </Link>
          </li>
          <li>
            <Link
              to="/impressum"
              className="hover:text-gray-300 transition-colors"
            >
              Impressum
            </Link>
          </li>
        </ul>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 py-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} EAVANT Handels GmbH. All rights
        reserved.
      </div>
    </footer>
  );
}
