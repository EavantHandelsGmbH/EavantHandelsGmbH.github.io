import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Express Delivery",
    description: "Schnelle Lieferung europaweit.",
    icon: "🚚",
  },
  {
    title: "Secure Transport",
    description: "Ihre Waren sicher unterwegs.",
    icon: "🔒",
  },
  {
    title: "Flexible Scheduling",
    description: "Lieferungen nach Ihrem Zeitplan.",
    icon: "⏱️",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px", once: false }); // trigger every time

  return (
    <section className="py-24 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Unsere Leistungen</h2>
        <motion.ul
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // animate every time in view
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
