import React, { useState } from "react";
import "@fontsource/outfit";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

      {/* HEADER */}
      <header className="px-4 sm:px-6 py-4 bg-blue-900 flex items-center justify-between shadow-md relative">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <h2 className="text-white font-outfit text-lg sm:text-xl font-semibold tracking-wide">
            सूर्योदय ओ.एस
          </h2>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-white text-sm font-outfit">
          <a href="#" className="block hover:text-white">पंजीकरण</a>
          <a href="#" className="block hover:text-white">लॉगिन</a>
          <a href="#" className="block hover:text-white">मंडी</a>
          <a href="#" className="block hover:text-white">मौसम</a>
          <a href="#" className="block hover:text-white">चेतावनी</a>
        </nav>

        {/* Mobile Menu Button */}
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
          <a href="#" className="block hover:text-white">पंजीकरण</a>
          <a href="#" className="block hover:text-white">लॉगिन</a>
          <a href="#" className="block hover:text-white">मंडी</a>
          <a href="#" className="block hover:text-white">मौसम</a>
          <a href="#" className="block hover:text-white">चेतावनी</a>
        </div>
      )}

      {/* Government Dignitaries Section */}
      <div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-md flex flex-col justify-center items-center">

        <h3 className="text-lg font-outfit font-semibold text-gray-800 mb-4">
          सरकारी नेतृत्व
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* President */}
          <div className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-52">
            <img
              src="https://www.presidentofindia.gov.in/sites/default/files/2025-04/president_of_india.jpg"
              alt="President of India"
              className="w-full h-52 object-fill"
            />
            <div className="p-3 text-center">
              <p className="font-semibold font-outfit text-gray-900">
                श्रीमती द्रौपदी मुर्मू
              </p>
              <p className="text-sm font-outfit text-gray-600">
                भारत के माननीय राष्ट्रपति
              </p>
            </div>
          </div>

          {/* Prime Minister */}
          <div className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-52">
            <img
              src="https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-6/459337720_1303104714517091_2841079786125894817_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UvzgOd4dwakQ7kNvwGXxxRT&_nc_oc=Adnh2VE9Cd2nHBV8H09U_cBoWKX_rc6a3Buyk96FE3uskqO_AgOtOHVK3tcOU8N_8w-vbnZIHaH9sBpEEB-aXBmu&_nc_zt=23&_nc_ht=scontent.fagr1-3.fna&_nc_gid=xTU0guYFTR5UwiQ7SHuHGg&oh=00_AfmfBUZ4qthqeU96ALubUAH7GR5uvYO0RlXNgbrsREPZJw&oe=69589F20"
              alt="Prime Minister of India"
              className="w-full h-52 object-fill"
            />
            <div className="p-3 text-center">
              <p className="font-semibold font-outfit text-gray-900">
                श्री नरेंद्र मोदी
              </p>
              <p className="text-sm text-gray-600 font-outfit">
                भारत के माननीय प्रधानमंत्री
              </p>
            </div>
          </div>

          {/* Agriculture Minister */}
          <div className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-52">
            <img
              src="https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-6/367400249_831809051843175_3472940923652535254_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=M4dTuFspoZsQ7kNvwFKOfnT&_nc_oc=AdkmOsBo7I9pMCXfjBoGmwHi1v0JLlgUJtycDd2PPXRpZYqN9hKKteTPZhCeO3BPG2sCJkmJDrJtLmFtp4ydAPjC&_nc_zt=23&_nc_ht=scontent.fagr1-3.fna&_nc_gid=AM_s4skyNV8UtbyjgCjEGw&oh=00_AflravBj0Uw4QsjI74H5pt35RjXSxUkKVg7GutprrYWTAA&oe=69588C00"
              alt="Minister of Agriculture"
              className="w-full h-52 object-fill"
            />
            <div className="p-3 text-center">
              <p className="font-semibold font-outfit text-gray-900">
                श्री शिवराज सिंह चौहान
              </p>
              <p className="text-sm font-outfit text-gray-600">
                कृषि एवं किसान कल्याण मंत्री
              </p>
            </div>
          </div>

          {/* Home Minister */}
          <div className="border border-gray-300 rounded-md overflow-hidden bg-gray-50 w-52">
            <img
              src="https://scontent.fagr1-3.fna.fbcdn.net/v/t39.30808-6/378983958_929288798552749_3157032759071580316_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=pZxQTNnM-HAQ7kNvwGmlR_X&_nc_oc=Adl5rNYzJpmhP9zpl44i2aKNuI7kon7qHVnPg8Y-ZP_e15tmde5XBr_ZWlIKy2TKI5aRz4fJnEro-RNT9-Zbu5Ph&_nc_zt=23&_nc_ht=scontent.fagr1-3.fna&_nc_gid=ZtxOZDr98Z5KPmvKyi_aWg&oh=00_AfmfMuIH1qcDhhsI-I9-DbLxW23eD8yxkiudSXPoDfiw0g&oe=695951F8"
              alt="Home Minister"
              className="w-full h-52 object-fill"
            />
            <div className="p-3 text-center">
              <p className="font-semibold font-outfit text-gray-900">
                श्री अमित शाह
              </p>
              <p className="text-sm font-outfit text-gray-600">
                भारत के गृह मंत्री
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Menu */}
<div className="bg-white p-4 sm:p-6 border border-gray-200 rounded-md flex justify-center">

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

    {/* मंडी भाव */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img
        src="https://www.ecofy.co.in/sites/default/files/inline-images/stree_sakti-image.png"
        alt="मंडी भाव"
        className="w-full h-52 object-fill"
      />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">मंडी भाव</p>
      </div>
    </div>

    {/* फसल उत्पादन */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/060/297/011/small/vibrant-illustration-of-sugar-cane-plants-in-a-field-free-vector.jpg" alt="फसल उत्पादन" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">फसल उत्पादन</p>
      </div>
    </div>

    {/* मृदा कार्ड */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://img.freepik.com/premium-vector/cartoon-colorful-fresh-organic-food-vegetable-bed-card-poster-place-text-concept-flat-design-vector-illustration-natural-agriculture-farm_287964-4462.jpg" alt="मृदा कार्ड" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">मृदा कार्ड</p>
      </div>
    </div>

    {/* निजी उपकरण */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://img.freepik.com/free-vector/flat-farmer-use-tablet-control-quadcopter-drone-automate-irrigation-agricultural-field-smart-farming-innovation-technology-agriculture-farm-industry-spray-fertilizer-concept_88138-726.jpg?semt=ais_hybrid&w=740&q=80" alt="निजी उपकरण" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">निजी उपकरण</p>
      </div>
    </div>

    {/* जल प्रबंधन */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/09/27/Pictures/city-and-sustainability-design-vector-ilustration_cc65cfce-e126-11e9-a910-fb95b571a1f5.jpg" alt="जल प्रबंधन" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">जल प्रबंधन</p>
      </div>
    </div>

    {/* मौसम / आपदा */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-natural-disaster-scene-of-flooding-clip-log-weather-vector-png-image_10627195.png" alt="मौसम / आपदा" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">मौसम / आपदा</p>
      </div>
    </div>

    {/* विशेषज्ञ चैट */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://www.shutterstock.com/image-vector/farmer-uses-ai-artificial-intelligence-260nw-2268954191.jpg" alt="विशेषज्ञ चैट" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">विशेषज्ञ चैट</p>
      </div>
    </div>

    {/* किराया केंद्र */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://img.freepik.com/free-vector/man-organic-farming-concept-illustration_52683-33820.jpg?semt=ais_hybrid&w=740&q=80" alt="किराया केंद्र" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">किराया केंद्र</p>
      </div>
    </div>

    {/* फसल डॉक्टर */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://static.vecteezy.com/system/resources/previews/046/148/253/non_2x/crop-doctor-agriculturalist-plant-botany-agriculture-logo-vector.jpg" alt="फसल डॉक्टर" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">फसल डॉक्टर</p>
      </div>
    </div>

    {/* मुनाफा खाता */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://media.assettype.com/outlookmoney/2025-07-09/x8z10ea1/Senior-Citizen-Savings-Scheme.jpg?w=801&auto=format%2Ccompress&fit=max&format=webp&dpr=1.0" alt="मुनाफा खाता" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">मुनाफा खाता</p>
      </div>
    </div>

    {/* योजनाएं */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://img.freepik.com/premium-vector/business-planning-flat-style-design-vector-illustration-stock-illustration_357500-262.jpg" alt="योजनाएं" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">योजनाएं</p>
      </div>
    </div>

    {/* ई-मंडी */}
    <div className="border border-gray-300 rounded-md overflow-hidden bg-blue-900 w-52 cursor-pointer">
      <img src="https://play-lh.googleusercontent.com/kFplNCq0VN2oCuS2a6L48Pp6OQXi6MlW_H7utqHz_z3D0CCvOq_j6x4l-TpHDO3k0XI" alt="ई-मंडी" className="w-full h-52 object-fill" />
      <div className="p-3 text-center">
        <p className="font-semibold text-white">ई-मंडी</p>
      </div>
    </div>

  </div>
</div>

    </div>
  );
}

export default App;
