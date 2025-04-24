from pathlib import Path

# Define the directory and file structure
project_root = Path("/mnt/data/zayvra-landing")
src_dir = project_root / "src" / "components"
src_dir.mkdir(parents=True, exist_ok=True)

# Define the content for the ZayvraLandingPage.jsx file
zayvra_landing_code = """
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
          <Button className="text-lg px-6 py-3">
            <ShoppingCart className="mr-2" /> Visit on Amazon
          </Button>
          <Button variant="outline" className="text-lg px-6 py-3">
            <Mail className="mr-2" /> Contact Us
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 md:px-16 grid md:grid-cols-3 gap-6 bg-gray-100">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Modern Products</h3>
            <p>Handpicked gadgets, beauty, fashion, and home essentials curated for quality & style.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">FBA-Ready Experience</h3>
            <p>Optimized packaging, logistics, and fast Amazon Prime delivery across multiple regions.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Premium Brand Feel</h3>
            <p>Every product under Zayvra is designed to elevate lifestyle — clean, sleek, and purposeful.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="py-8 bg-white text-center border-t">
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} ZayvraStore.com — All rights reserved.</p>
      </footer>
    </main>
  );
}
"""

# Write the file
file_path = src_dir / "ZayvraLandingPage.jsx"
file_path.write_text(zayvra_landing_code.strip())

file_path.name