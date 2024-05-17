import Herobg from "../assets/images/background.png";

const Hero = () => {
  return (
    <section
      className="relative px-36 w-full h-[80vh] min-h-[550px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("${Herobg}")` }}
    >
      <div className="container px-4 md:px-6 text-center z-10">
        <h1 className="text-4xl  md:text-6xl font-bold tracking-tight text-white mb-4">
          Créez une cagnotte pour votre communauté
        </h1>
        <p className="text-lg md:text-xl text-[#c9c9c9] mb-8">
          Libérez le pouvoir du don collectif <br /> et faites partie d’un
          mouvement qui crée un impact durable.
        </p>
        <button
          className="btn-cagnotter"
          onClick={() => navigate("/Create-project")}
        >
          Créer une cagnotte
        </button>
      </div>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
    </section>
  );
};

export default Hero;
