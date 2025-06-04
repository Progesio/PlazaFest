export default function HeroBanner() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg mb-6 h-40">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400" />
      <div className="absolute inset-0 flex flex-col justify-center px-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome to Plaza Festival</h1>
        <p className="text-sm">Book your favorite sports facilities with ease</p>
        <button className="bg-white text-green-600 font-medium py-1 px-4 rounded-full mt-3 w-max text-sm">Book Now</button>
      </div>
    </div>
  );
}
