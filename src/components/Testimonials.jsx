import { motion } from "framer-motion";

const testimonials = [
  {
    text: (
      <img src="https://cdn.prod.website-files.com/646f271d24f29c0367691efe/65533b76dfc790385c4c59fc_Urbify-Logo-normal.svg" />
    ),
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Unsere Partner</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <p className="mb-4">{t.text}</p>
              <p className="font-semibold">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
