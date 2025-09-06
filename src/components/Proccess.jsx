import { motion } from "framer-motion";

const steps = [
  "Anfrage stellen",
  "Abholung planen",
  "Transport durchführen",
  "Lieferung bestätigen",
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">So funktioniert es</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex-1 p-6 border-l md:border-l-0 md:border-t border-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="text-2xl font-bold mb-2">{i + 1}</div>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
