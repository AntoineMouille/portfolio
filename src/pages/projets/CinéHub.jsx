import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faPhp, faCss3Alt, faLaravel, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiTailwindcss, SiVite,SiGit, SiGitlab  } from "react-icons/si";
import IconLogo from '../../components/IconLogo';
import Back from '../../components/Back';









function Cinehub(){
    const scrollRef = useRef(null);

    const icons = [
    { name: "PHP", link: faPhp },
            {name: "Laravel", link: faLaravel},
  ];

  const projectMedia = [
    { type: 'image', url: './cinehub1.png' },
    { type: 'image', url: './cinehub2.png' },
    { type: 'image', url: './cinehub3.png' },
    { type: 'image', url: './cinehub4.png' },
    { type: 'video', url: './cinehub.mp4'},
    { type: 'image', url: './cinehub5.png' },
    { type: 'video', url: './cinehub2.mp4'},
    { type: 'video', url: './cinehub3.mp4'},
    { type: 'video', url: './cinehub4.mp4'},
    { type: 'image', url: './cinehub6.png' },
    

  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative text-white min-h-screen bg-gray-900 overflow-hidden font-sans pt-24 pb-12">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      <Back />

      <div className="relative container mx-auto px-4 flex flex-col items-center justify-center gap-12">
        <div className="p-8 max-w-3xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            CINÉ<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">HUB</span>
          </h1>
        </div>

        <div className="w-full max-w-4xl bg-gray-800/20 backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-8 text-gray-300 uppercase tracking-widest">Langages & Outils utilisés</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {icons.map((icon, index) => (
              <IconLogo key={index} name={icon.name} link={icon.link} />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="p-2 w-48 text-center bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl z-10 cursor-default hover:border-blue-400/30 transition-all">
              <div className="flex items-center justify-center gap-2">
                <SiTailwindcss className="text-white text-xl" />
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Tailwind</span>
              </div>
            </div>

            <div className="p-2 w-48 text-center bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl z-10 cursor-default hover:border-purple-400/30 transition-all">
              <div className="flex items-center justify-center gap-2">
                <SiVite className="text-white text-xl" />
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Vite</span>
              </div>
            </div>
            <div className="p-2 w-48 text-center bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl z-10 cursor-default hover:border-blue-400/30 transition-all">
              <div className="flex items-center justify-center gap-2">
                <SiGit className="text-white text-xl" />
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Git</span>
              </div>
            </div>
            <div className="p-2 w-48 text-center bg-gray-800/40 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl z-10 cursor-default hover:border-blue-400/30 transition-all">
              <div className="flex items-center justify-center gap-2">
                <SiGitlab className="text-white text-xl" />
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">GitLab</span>
              </div>
              </div>
          </div>
        </div>

        <div className="w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-6 text-gray-300 uppercase tracking-widest text-center">Aperçu du projet</h2>

          <div className="relative group">
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-2xl border border-white/10 bg-black/20 shadow-2xl overflow-hidden"
            >
              {projectMedia.map((item, index) => (
                <div key={index} className="min-w-full snap-center flex items-center justify-center bg-gray-800/30 aspect-video">
                  {item.type === 'video' ? (
                    <video src={item.url} muted autoPlay loop playsInline  className="w-full h-full object-cover " />
                  ) : (
                    <img src={item.url} alt={`Aperçu ${index}`} className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all opacity-0 group-hover:opacity-100"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className='flex justify-center cursor-pointer'>
            <button className=' mt-6'><a href='https://github.com/AntoineMouille/Cinehub_iut' className='cursor-pointer'><IconLogo name="Github" link={faGithub}/></a></button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Cinehub;