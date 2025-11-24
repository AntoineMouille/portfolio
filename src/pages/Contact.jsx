function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center px-2 pt-20 cursor-default">
      {/* Bloc principal (titre) */}
      <div className="p-8 max-w-3xl w-full text-center 
                        bg-gray-500/30 backdrop-blur-lg 
                        border border-white/20 rounded-2xl shadow-2xl ">
          <h1 className="text-5xl font-extrabold mb-4">Contacts</h1>
      </div>

      {/* Bloc d'informations */}
      <div className="bg-gray-500/30 max-w-4xl w-full mt-6 p-8 text-center 
                      border border-white/20 rounded-lg shadow-lg text-3xl">
        <p>Mail : antoine.mouille62750@gmail.com</p>
        <p>Mail universitaire : antoine_mouille@ens.univ-artois.fr</p>
        <p>Téléphone : +33 7 49 49 22 81</p>
        <p>
          Github :{" "}
          <a
            href="https://github.com/AntoineMouille"
            className="text-blue-400 hover:underline"
          >
            GitHub/Antoine Mouille
          </a>
        </p>
        <p>
          Linkedin:{" "}
          <a 
            href="https://www.linkedin.com/in/antoine-mouille"
            className="text-blue-400 hover:underline"
            >Linkedin/Antoine Mouille</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
