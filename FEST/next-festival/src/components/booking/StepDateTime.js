export default function StepDateTime({
  selectedFacility, facilityObj, dates, selectedDate, onDateClick, TIME_SLOTS, selectedSlots, onSlotClick, clearSlots, goToStep, onNext
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <button id="backToStep1" className="flex items-center text-green-600" onClick={() => goToStep(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <h2 className="text-lg font-semibold text-gray-800">Select Date & Time</h2>
        <div className="w-5"></div>
      </div>
      {/* Selected Facility Summary */}
      <div className="bg-green-50 rounded-lg p-3 mb-4 flex items-center">
        <div className="bg-green-100 rounded-full p-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-600">Selected Facility</p>
          <p id="selectedFacilityName" className="font-medium text-gray-800">{facilityObj?.name}</p>
        </div>
      </div>
      {/* Date Selection */}
      <h3 className="font-medium text-gray-800 mb-2">Select Date</h3>
      <div className="date-selector flex overflow-x-auto space-x-3 pb-2 mb-4">
        {dates.map((date, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 rounded-lg border ${selectedDate && selectedDate.toDateString() === date.toDateString() ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-800 border-gray-200"}`}
            onClick={() => onDateClick(date)}
          >
            {date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })}
          </button>
        ))}
      </div>
      {/* Time Selection */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium text-gray-800">Select Time Slots</h3>
          <div className="text-sm text-green-600">
            <span id="selectedSlotsCount">{selectedSlots.length}</span> slots selected
          </div>
        </div>
        <div className="bg-green-50 rounded-lg p-3 mb-3">
          <p className="text-sm text-gray-600">You can select multiple consecutive time slots for longer bookings.</p>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {TIME_SLOTS.map((slot) => {
            const isSelected = selectedSlots.some((s) => s.time === slot.time);
            return (
              <div
                key={slot.time}
                className={`time-slot rounded-lg border p-2 text-center ${slot.disabled ? "disabled bg-white border-gray-200 text-gray-400 cursor-not-allowed" : "cursor-pointer bg-white border-gray-200"} ${isSelected ? "border-green-600 bg-green-100" : ""}`}
                data-time={slot.time}
                data-hour={slot.hour}
                onClick={() => onSlotClick(slot)}
              >
                <p className="text-sm font-medium">{slot.time}</p>
                <p className="text-xs text-gray-500">{slot.label}</p>
              </div>
            );
          })}
        </div>
        {/* Selected Time Slots Summary */}
        {selectedSlots.length > 0 && (
          <div id="selectedTimeSlots" className="bg-white rounded-lg border border-gray-200 p-3 mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Selected Time Slots</h4>
            <div id="selectedSlotsList" className="flex flex-wrap gap-2">
              {selectedSlots
                .sort((a, b) => a.hour - b.hour)
                .map((slot) => (
                  <span key={slot.time} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {slot.time}
                  </span>
                ))}
            </div>
            <button id="clearTimeSlots" className="text-sm text-red-600 mt-2" onClick={clearSlots}>
              Clear selection
            </button>
          </div>
        )}
      </div>
      <button
        id="nextToStep3"
        className="w-full bg-green-600 text-white rounded-lg py-3 font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={selectedSlots.length === 0}
        onClick={onNext}
      >
        Continue
      </button>
    </div>
  );
}
