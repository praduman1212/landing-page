import Image from 'next/image';
import logo from '../public/shiprocket_logo.svg';
import profileImage from '../public/home-slider-image-15-1.webp';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-blue-200">
      {/* Top Navbar */}
      <div className="bg-brandPurple text-sm py-2 text-center text-white font-semibold">
        <p>Recharge Now for ₹1000 & Get ₹1600* In Your Wallet. Use Code: FLAT600 | Limited Period Offer</p>
      </div>

      <header className="flex items-center justify-between p-6 shadow-md bg-white">
        <Image src={logo} alt="Shiprocket Logo" width={150} height={50} />
        <nav className="flex items-center space-x-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-brandPurple">Products</a>
          <a href="#" className="hover:text-brandPurple">Platform</a>
          <a href="#" className="hover:text-brandPurple">Pricing</a>
          <a href="#" className="hover:text-brandPurple">Partners</a>
          <a href="#" className="hover:text-brandPurple">Track Order</a>
          <a href="#" className="hover:text-brandPurple">Resources</a>
          <a href="#" className="hover:text-brandPurple">Quick</a>
          <button className="px-4 py-1 bg-brandPurple text-white rounded-full">Sign Up Now</button>
        </nav>
      </header>

      {/* Main Content - Page 1 */}
      <main className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-10 space-y-10 md:space-y-0">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-6xl font-extrabold text-brandPurple leading-tight">
            Ship your dream
          </h1>
          <p className="text-lg text-gray-700">
            Create a delightful online journey by optimizing your shipping process and everything surrounding it.
          </p>
          <button className="px-6 py-3 bg-brandOrange text-white font-semibold rounded-full mt-4 hover:bg-orange-700">
            Sign up for free
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center space-y-6">
          <div className="w-64 h-64 relative">
            <Image src={profileImage} alt="Woman Reading" layout="fill" objectFit="cover" className="rounded-full shadow-lg" />
          </div>
        </div>
      </main>

      {/* Divider */}
      <div className="h-1 bg-gray-300 my-16 mx-auto max-w-5xl" />

      {/* Main Content - Page 2 */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-purple-600">A trusted growth partner</p>
          <h2 className="text-4xl font-bold text-purple-800 mt-4">
            Lakhs of eCommerce businesses chose <span className="text-yellow-500">Shiprocket</span>
          </h2>
          <p className="text-4xl font-bold text-purple-800">to streamline their customer journey</p>
          <p className="text-4xl font-bold text-purple-800">from shipping to returns and beyond</p>
        </div>

        {/* Stats Section */}
        <section className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="text-3xl font-bold text-purple-800">2.5 Lakh+</h3>
            <p className="text-gray-500">merchants nationwide</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-800">20 Crore</h3>
            <p className="text-gray-500">transactions every year</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-800">₹ 30K Crore</h3>
            <p className="text-gray-500">annual GMV powered</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-800">25 Crore</h3>
            <p className="text-gray-500">shipments delivered</p>
          </div>

          

        </section>
      </section>
    </div>
  );
}
