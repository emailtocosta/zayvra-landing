export default function Features() {
  const features = [
    "Premium Product Quality",
    "Fast & Reliable Shipping",
    "Responsive Support",
  ];

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-10">Features</h2>
        <ul className="space-y-6">
          {features.map((feature, index) => (
            <li key={index} className="text-lg font-medium text-gray-700">
              ✅ {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
