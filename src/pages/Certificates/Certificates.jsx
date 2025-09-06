
import React from "react";
import { motion } from "framer-motion";
import c1 from "../../assets/images/c1.png";
import c2a from "../../assets/images/c2a.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";
import c5 from "../../assets/images/c5.png";
import c6 from "../../assets/images/c6.png";
import c7 from "../../assets/images/c7.png";
import cer from "../../assets/images/cer.png";
import cer2 from "../../assets/images/cer2.png";

const certificateImages = [cer, cer2, c1, c2a, c3, c4, c5, c6, c7];

const Certificates = () => {
  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background - same as Education page */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            <span className="mr-3 align-middle"><i className="fas fa-certificate text-yellow-400"></i></span>
            Abu Abdillah's Certificates
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Here are my achievements and certifications. Each certificate is a step in my journey of learning and teaching tech with Islamic values.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificateImages && certificateImages.length > 0 ? (
            certificateImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border-blue-400/20 hover:border-teal-500 hover:scale-[1.02] flex items-center justify-center h-96"
              >
                <img src={img} alt={`Certificate ${idx + 1}`} className="object-contain h-full w-full rounded-xl" />
              </motion.div>
            ))
          ) : (
            <div className="text-white text-2xl font-bold text-center w-full">No certificates found. If you see this message, check your image imports and file paths.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
