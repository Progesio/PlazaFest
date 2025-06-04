export default function NewsSection() {
  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Plaza Festival News</h2>
        <a href="#" className="text-green-600 text-sm">View All</a>
      </div>
      <div className="space-y-4">
        {/* News Item 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-green-100 relative">
            <svg className="absolute inset-0 w-full h-full text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
            <div className="absolute bottom-0 left-0 bg-green-600 text-white px-3 py-1 text-xs"></div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Swimming Pool Renovation Complete</h3>
            <p className="text-gray-600 text-sm mb-2">Our Olympic-sized swimming pool is now open with improved facilities and amenities.</p>
            <div className="flex justify-between items-center"></div>
          </div>
        </div>
        {/* News Item 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-blue-100 relative">
            <svg className="absolute inset-0 w-full h-full text-green-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-1">New Basketball Court Opening</h3>
            <p className="text-gray-600 text-sm mb-2">Join us for the grand opening of our professional-grade basketball court this weekend.</p>
            <div className="flex justify-between items-center"></div>
          </div>
        </div>
        {/* News Item 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-yellow-100 relative">
            <svg className="absolute inset-0 w-full h-full text-yellow-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Summer Sports Festival</h3>
            <p className="text-gray-600 text-sm mb-2">Get ready for our annual summer sports festival with competitions and prizes.</p>
            <div className="flex justify-between items-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
