function Roadmap() {
  return (
    <div id="roadmap" className="bg-[#f7f6f6]  py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-500/10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-20 text-black">
          Roadmap
        </h1>

        <div className="relative ">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30 transform -translate-x-1/2" />

          {[
            {
              phase: "Phase 1",
              items: ["Token creation", "Presale takeoffs", "Community Building"],
              color: "from-blue-500 to-cyan-500"
            },
            {
              phase: "Phase 2",
              items: ["Launch token on dex", "Issue bounce token to presale holders via telegram campaign"],
              color: "from-purple-500 to-fuchsia-500"
            },
            {
              phase: "Phase 3",
              items: ["Launch token on Cex", "Burn 25% token"],
              color: "from-pink-500 to-rose-500"
            },
            {
              phase: "Phase 4",
              items: ["Launch tokens use case for payment transfer and finance"],
              color: "from-orange-500 to-amber-500"
            }
          ].map((phase, index) => (
            <div 
              key={index}
              className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center justify-between gap-8 group`}
            >
              {/* Phase Card */}
              <div className="w-full md:w-5/12 p-8 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl relative overflow-hidden">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${phase.color} opacity-5 -z-[1]`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-2 blur-xl opacity-20 bg-gradient-to-r ${phase.color} transition-opacity duration-300 group-hover:opacity-30 -z-[2]`} />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-r ${phase.color} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg`}>
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                </div>
                
                <ul className="space-y-4 pl-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-lg">
                      <div className={`bg-gradient-to-r ${phase.color} w-2 h-2 rounded-full mr-3`} />
                      <span className="relative top-px">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline Dot */}
              <div className="absolute md:left-1/2 left-0 -translate-x-1/2 md:translate-x-0 top-1/2 md:top-auto md:-translate-y-1/2 w-6 h-6 bg-white border-4 border-purple-400/50 rounded-full shadow-xl">
                <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              </div>

              {/* Phase Number (Mobile) */}
              <div className="md:hidden text-4xl font-bold text-gray-300/40">
                0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Roadmap