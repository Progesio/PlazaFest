export default function QuickAccess() {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Access</h2>
      <div className="grid grid-cols-3 gap-3">
        {/* Swimming Pool */}
        <a href="#" className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
          <div className="bg-green-100 rounded-full p-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </div>
          <span className="text-xs text-center">Swimming Pool</span>
        </a>
        {/* Basketball */}
        <a href="#" className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
          <div className="bg-orange-100 rounded-full p-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </div>
          <span className="text-xs text-center">Basketball</span>
        </a>
        {/* Tennis */}
        <a href="#" className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
          <div className="bg-green-100 rounded-full p-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </div>
          <span className="text-xs text-center">Tennis</span>
        </a>
        {/* Badminton */}
        <a href="#" className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
          <div className="bg-purple-100 rounded-full p-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </div>
          <span className="text-xs text-center">Badminton</span>
        </a>
        {/* Futsal */}
        <a href="#" className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
          <div className="bg-red-100 rounded-full p-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </div>
          <span className="text-xs text-center">Futsal</span>
        </a>
        {/* More */}
        <a href="#" className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center justify-center">
          <div className="bg-gray-100 rounded-full p-3 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
          </div>
          <span className="text-xs text-center">More</span>
        </a>
      </div>
    </section>
  );
}
