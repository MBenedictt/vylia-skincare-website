// import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-screen max-lg:h-[90vh] bg-[url('/assets/hero-home.png')] bg-cover bg-center max-lg:bg-position-[30%] bg-no-repeat flex items-center justify-center">
        <div className="w-full h-screen max-lg:h-[90vh] bg-[rgba(0,0,0,0.5)]" />
      </div>
      <div className="w-full h-screen"></div>
    </div>
  );
}
