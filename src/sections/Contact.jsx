export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 text-center py-20">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6 text-gray-600">Have questions? Reach out via email at <a href="mailto:support@zayvrastore.com" className="text-blue-600">support@zayvrastore.com</a></p>
      <form className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-md" />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-md" />
        <textarea placeholder="Your Message" rows={4} className="w-full border p-3 rounded-md"></textarea>
        <button type="submit" className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">Send</button>
      </form>
    </section>
  );
}
