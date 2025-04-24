import { Mail, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function ZayvraLandingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="py-20 px-4 md:px-16 bg-gradient-to-b from-gray-50 to-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Welcome to Zayvra
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
        >
          Premium Amazon FBA Brand | Trusted by Thousands | Modern, Minimal & Scalable
        </motion.p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-xl text-lg flex items-center gap-2 hover:opacity-90">
            <ShoppingCart /> Visit on Amazon
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-xl text-lg flex items-center gap-2 hover:bg-gray-100">
            <Mail /> Contact Us
          </button>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 grid md:grid-cols-3 gap-6 bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Modern Products</h3>
          <p>Handpicked gadgets, beauty, fashion, and home essentials curated for quality & style.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">FBA-Ready Experience</h3>
          <p>Optimized packaging, logistics, and fast Amazon Prime delivery across multiple regions.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Premium Brand Feel</h3>
          <p>Every product under Zayvra is designed to elevate lifestyle — clean, sleek, and purposeful.</p>
        </div>
      </section>

      <footer className="py-8 bg-white text-center border-t">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} ZayvraStore.com — All rights reserved.</p>
      </footer>
    </main>
  );
}
