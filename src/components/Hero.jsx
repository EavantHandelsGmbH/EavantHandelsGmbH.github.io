import { motion, useViewportScroll, useTransform } from "framer-motion";
import transporter from "../assets/transporter.png";
import Button from "./UI/Button";
import { Link } from "react-router";

export default function HeroSection() {
  const { scrollY } = useViewportScroll();

  // Text scroll animation
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  // Van scroll animation (moves left on scroll)
  const vanScrollX = useTransform(scrollY, [0, 400], [0, 300]);
  const vanOpacity = useTransform(scrollY, [0, 400], [1, 0.1]);
  // Starts at 0 (where it finished driving in), moves -150px left as you scroll

  return (
    <section className="relative bg-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <motion.div
          className="md:w-1/2 space-y-6"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Das flexibelste{" "}
            <span className="text-cyan-400">Transport Unternehmen</span>{" "}
            Österreichs
          </h1>

          <p className="text-lg text-gray-200">
            Wir bringen Ihre Waren sicher, pünktlich und effizient ans Ziel –
            europaweit.
          </p>

          <div>
            <Button variant="secondary">
              <Link to="/kontakt">Interessiert? Schreiben Sie uns</Link>
            </Button>
          </div>
        </motion.div>

        {/* Van */}
        <motion.div
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center hidden md:flex"
          initial={{ opacity: 0, x: 100 }} // drives in from right
          animate={{ opacity: 1, x: 0 }} // mounts at center
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ x: vanScrollX, opacity: vanOpacity }} // scroll-based movement
        >
          <img
            src={transporter}
            alt="Transport Wagen"
            className="w-96 md:w-[500px] lg:w-[600px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
