import { motion } from "motion/react";
import Button from "./UI/Button";
import { Link } from "react-router";

export default function ServiceCard({ service }) {
  return (
    <motion.li
      className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="mb-2">{service.description}</p>
      <Button>
        <Link to="/kontakt">Interessiert ?</Link>
      </Button>
    </motion.li>
  );
}
