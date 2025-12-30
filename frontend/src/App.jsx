import React, { useState } from "react";
import "@fontsource/outfit";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden font-outfit">

      {/* HEADER */}
      <header className="px-4 sm:px-6 py-4 bg-blue-900 flex items-center justify-between shadow-md relative">
        <div className="flex items-center gap-2">
          <h2 className="text-white text-lg sm:text-xl font-semibold tracking-wide">
            सूर्योदय ओ.एस
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-white text-sm">
          <a href="#" className="hover:text-white">पंजीकरण</a>
          <a href="#" className="hover:text-white">लॉगिन</a>
          <a href="#" className="hover:text-white">मंडी</a>
          <a href="#" className="hover:text-white">मौसम</a>
          <a href="#" className="hover:text-white">चेतावनी</a>
        </nav>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 text-white px-4 py-4 space-y-3">
          <a href="#" className="block">पंजीकरण</a>
          <a href="#" className="block">लॉगिन</a>
          <a href="#" className="block">मंडी</a>
          <a href="#" className="block">मौसम</a>
          <a href="#" className="block">चेतावनी</a>
        </div>
      )}

      {/* GOVERNMENT LEADERSHIP */}
      <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-md mt-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          सरकारी नेतृत्व
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-full max-w-[180px] mx-auto">
            <img src="https://www.presidentofindia.gov.in/sites/default/files/2025-04/president_of_india.jpg" className="w-full h-52 object-cover" />
            <div className="p-2 text-center">
              <p className="font-semibold text-sm">श्रीमती द्रौपदी मुर्मू</p>
              <p className="text-xs text-gray-600">राष्ट्रपति</p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-full max-w-[180px] mx-auto">
            <img src="https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-6/459337720_1303104714517091_2841079786125894817_n.jpg" className="w-full h-52 object-cover" />
            <div className="p-2 text-center">
              <p className="font-semibold text-sm">श्री नरेंद्र मोदी</p>
              <p className="text-xs text-gray-600">प्रधानमंत्री</p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-full max-w-[180px] mx-auto">
            <img src="https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-6/367400249_831809051843175_3472940923652535254_n.jpg" className="w-full h-52 object-cover" />
            <div className="p-2 text-center">
              <p className="font-semibold text-sm">श्री शिवराज सिंह चौहान</p>
              <p className="text-xs text-gray-600">कृषि मंत्री</p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-full max-w-[180px] mx-auto">
            <img src="https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-6/378983958_929288798552749_3157032759071580316_n.jpg" className="w-full h-52 object-cover" />
            <div className="p-2 text-center">
              <p className="font-semibold text-sm">श्री अमित शाह</p>
              <p className="text-xs text-gray-600">गृह मंत्री</p>
            </div>
          </div>

        </div>
      </div>

      {/* MENU */}
      <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-md mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">

          {[
            "मंडी भाव","फसल उत्पादन","मृदा कार्ड","निजी उपकरण","जल प्रबंधन",
            "मौसम / आपदा","विशेषज्ञ चैट","किराया केंद्र","फसल डॉक्टर",
            "मुनाफा खाता","योजनाएं","ई-मंडी"
          ].map((title, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-full max-w-[180px] mx-auto cursor-pointer"
            >
              <img
                src="https://www.ecofy.co.in/sites/default/files/inline-images/stree_sakti-image.png"
                alt={title}
                className="w-full h-52 object-cover"
              />
              <div className="p-2 text-center">
                <p className="font-semibold text-sm text-white">{title}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;
