// call getlistFasility from next-festival/src/hooks/getlistFasility.js
import {getlistFasility} from "../../hooks/getlistFasility";

function listFasility(params) {
  let facilities = getlistFasility();
  if (facilities.length === 0) {
    return [];
  }
  console.log("listFasility", facilities);
  return facilities.map((f) => ({
    key: f.id,
    name: f.nama,
    additional: f.additional,
    bg: f.bg? f.bg : "bg-gray-100",
    svg: f.benner[0],
  }));
}


export default function StepFacility({ selectedFacility, onSelect, onNext }) {

  let productdat= listFasility();
  console.log("StepFacility productdat", productdat);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Select a Facility</h2>
      <div className="grid grid-cols-2 gap-4">
        {productdat.map((f) => (
          <div
            key={f.key}
            className={`facility-card bg-white rounded-lg shadow-md overflow-hidden cursor-pointer border-2 ${selectedFacility === f.key ? "border-green-600" : "border-transparent"}`}
            onClick={() => onSelect(f.key)}
            data-facility={f.key}
          >
            <div className={`h-32 ${f.bg} flex items-center justify-center`}>
              <img src={f.svg} alt={f.name} className="h-35 w-35" />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-gray-800">{f.name}</h3>
              <p className="text-sm text-gray-600">{f.additional}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="w-full bg-green-600 text-white rounded-lg py-3 mt-6 font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={!selectedFacility}
        id="nextToStep2"
        onClick={onNext}
      >
        Continue
      </button>
    </div>
  );
}
