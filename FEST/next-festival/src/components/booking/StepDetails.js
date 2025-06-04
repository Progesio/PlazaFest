export default function StepDetails({
  facilityObj,
  selectedDate,
  formatDate,
  selectedSlots,
  formatTimeRange,
  duration,
  price,
  personal,
  handlePersonalChange,
  payment,
  handlePaymentChange,
  goToStep,
  onConfirm
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button id="backToStep2" className="flex items-center text-green-600" onClick={() => goToStep(2)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Booking Details</h2>
        <div className="w-5"></div>
      </div>
      {/* Booking Summary */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Booking Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Facility</span>
            <span id="summaryFacility" className="font-medium text-gray-800">{facilityObj?.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date</span>
            <span id="summaryDate" className="font-medium text-gray-800">{formatDate(selectedDate)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time</span>
            <span id="summaryTime" className="font-medium text-gray-800">{formatTimeRange(selectedSlots)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Duration</span>
            <span id="summaryDuration" className="font-medium text-gray-800">{duration} hour{duration > 1 ? "s" : ""}</span>
          </div>
          <div className="border-t border-gray-200 pt-3 mt-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Price</span>
              <span id="summaryPrice" className="font-medium text-gray-800">Rp {price.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Personal Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              placeholder="Enter your full name"
              value={personal.fullName}
              onChange={handlePersonalChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              placeholder="Enter your email"
              value={personal.email}
              onChange={handlePersonalChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
              placeholder="Enter your phone number"
              value={personal.phone}
              onChange={handlePersonalChange}
            />
          </div>
        </div>
      </div>
      {/* Payment Method */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">Payment Method</h3>
        <div className="space-y-3">
          <label className="flex items-center p-3 border border-gray-200 rounded-lg">
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              className="h-4 w-4 text-green-600"
              checked={payment === "creditCard"}
              onChange={handlePaymentChange}
            />
            <span className="ml-2">Credit/Debit Card</span>
          </label>
          <label className="flex items-center p-3 border border-gray-200 rounded-lg">
            <input
              type="radio"
              name="paymentMethod"
              value="bankTransfer"
              className="h-4 w-4 text-green-600"
              checked={payment === "bankTransfer"}
              onChange={handlePaymentChange}
            />
            <span className="ml-2">Bank Transfer</span>
          </label>
          <label className="flex items-center p-3 border border-gray-200 rounded-lg">
            <input
              type="radio"
              name="paymentMethod"
              value="eWallet"
              className="h-4 w-4 text-green-600"
              checked={payment === "eWallet"}
              onChange={handlePaymentChange}
            />
            <span className="ml-2">E-Wallet</span>
          </label>
        </div>
      </div>
      <button
        id="confirmBooking"
        className="w-full bg-green-600 text-white rounded-lg py-3 font-medium"
        onClick={onConfirm}
      >
        Confirm Booking
      </button>
    </div>
  );
}
