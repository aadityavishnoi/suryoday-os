import React, { useState } from "react";
import "@fontsource/outfit";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">

      {/* HEADER */}
      <header className="px-4 sm:px-6 py-4 bg-blue-900 flex items-center justify-between shadow-md relative">
        <div className="flex items-center gap-2">
          <h2 className="text-white font-outfit text-lg sm:text-xl font-semibold tracking-wide">
            सूर्योदय ओ.एस
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-white text-sm font-outfit">
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
        <div className="md:hidden bg-blue-900 text-white px-4 py-4 space-y-3 font-outfit">
          <a href="#" className="block">पंजीकरण</a>
          <a href="#" className="block">लॉगिन</a>
          <a href="#" className="block">मंडी</a>
          <a href="#" className="block">मौसम</a>
          <a href="#" className="block">चेतावनी</a>
        </div>
      )}

      {/* Government Dignitaries */}
      <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-md flex flex-col items-center">
        <h3 className="text-lg font-outfit font-semibold text-gray-800 mb-4">
          सरकारी नेतृत्व
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full place-items-center">

          {[
            {
              img: "https://www.presidentofindia.gov.in/sites/default/files/2025-04/president_of_india.jpg",
              name: "श्रीमती द्रौपदी मुर्मू",
              role: "भारत के माननीय राष्ट्रपति",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrKlBcAbAJZKueIujU8OZCyoII0Rzpwx_RuLPHHKwRM9hdnW2QkcEUh38nD3oXaSZUUic9hi83dOfGEUM4G79nKIJTWUtAWrYodldDZ4&s=10",
              name: "श्री नरेंद्र मोदी",
              role: "भारत के माननीय प्रधानमंत्री",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcygLv8qwjDkcc2yfSF0xJ72FcjCwm0n1b1Nn9ZlPazOvS4JOINOsDTtkS7wL9GTka9gIkt6jLWVOuYEcjGATS4iEYnAywOL6S70z4hPY&s=10",
              name: "श्री शिवराज सिंह चौहान",
              role: "कृषि एवं किसान कल्याण मंत्री",
            },
            {
              img: "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvdxnBk9f_EnNZu5shk-gIetyNP-d2tSCINgqlJ4N-_UxXxZCSzY-o91lxKGMk8U8LqwrR_RRInrBSrL6jE3kSxBZxSNW6yF-yuoGlEw&s=10",
              name: "श्री अमित शाह",
              role: "भारत के गृह मंत्री",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-full max-w-[180px]"
            >
              <img src={p.img} alt={p.name} className="w-full h-52 object-fill" />
              <div className="p-3 text-center">
                <p className="font-semibold font-outfit text-gray-900 text-sm">
                  {p.name}
                </p>
                <p className="text-xs font-outfit text-gray-600">
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MENU */}
      <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-md flex justify-center mt-6">
        <h3 className="text-lg font-outfit font-semibold text-gray-800 mb-4">
          मुख्य मेन्यू
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full place-items-center">

          {[
            ["मंडी भाव","https://www.ecofy.co.in/sites/default/files/inline-images/stree_sakti-image.png"],
            ["फसल उत्पादन","https://static.vecteezy.com/system/resources/thumbnails/060/297/011/small/vibrant-illustration-of-sugar-cane-plants-in-a-field-free-vector.jpg"],
            ["मृदा कार्ड","https://img.freepik.com/premium-vector/cartoon-colorful-fresh-organic-food-vegetable-bed-card-poster-place-text-concept-flat-design-vector-illustration-natural-agriculture-farm_287964-4462.jpg"],
            ["निजी उपकरण","https://img.freepik.com/free-vector/flat-farmer-use-tablet-control-quadcopter-drone-automate-irrigation-agricultural-field-smart-farming-innovation-technology-agriculture-farm-industry-spray-fertilizer-concept_88138-726.jpg"],
            ["जल प्रबंधन","https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/09/27/Pictures/city-and-sustainability-design-vector-ilustration_cc65cfce-e126-11e9-a910-fb95b571a1f5.jpg"],
            ["मौसम / आपदा","https://png.pngtree.com/png-clipart/20230823/original/pngtree-natural-disaster-scene-of-flooding-clip-log-weather-vector-png-image_10627195.png"],
            ["विशेषज्ञ चैट","https://www.shutterstock.com/image-vector/farmer-uses-ai-artificial-intelligence-260nw-2268954191.jpg"],
            ["किराया केंद्र","https://img.freepik.com/free-vector/man-organic-farming-concept-illustration_52683-33820.jpg"],
            ["फसल डॉक्टर","https://static.vecteezy.com/system/resources/previews/046/148/253/non_2x/crop-doctor-agriculturalist-plant-botany-agriculture-logo-vector.jpg"],
            ["मुनाफा खाता","https://media.assettype.com/outlookmoney/2025-07-09/x8z10ea1/Senior-Citizen-Savings-Scheme.jpg"],
            ["योजनाएं","https://img.freepik.com/premium-vector/business-planning-flat-style-design-vector-illustration-stock-illustration_357500-262.jpg"],
            ["ई-मंडी","https://play-lh.googleusercontent.com/kFplNCq0VN2oCuS2a6L48Pp6OQXi6MlW_H7utqHz_z3D0CCvOq_j6x4l-TpHDO3k0XI"],
          ].map(([title, img], i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-full max-w-[180px] cursor-pointer"
            >
              <img src={img} alt={title} className="w-full h-52 object-fill" />
              <div className="p-3 text-center">
                <p className="font-semibold text-white text-sm">{title}</p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;
