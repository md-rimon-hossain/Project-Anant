import { useState } from "react";

interface AllocationItem {
  percentage: number;
  title: string;
  color: string;
  phase?: string;
}

const TokenomicsSection = () => {
  const [copied, setCopied] = useState(false);

  const allocations: AllocationItem[] = [
    { percentage: 40, title: "Public Sale", color: "bg-[#4CAF50]" },
    {
      percentage: 25,
      title: "Token Burning",
      color: "bg-[#2196F3]",
      phase: "Phase 3",
    },
    {
      percentage: 25,
      title: "ETF Reserve",
      color: "bg-[#FF9800]",
      phase: "Phase 4",
    },
    { percentage: 10, title: "Team", color: "bg-[#F44336]", phase: "Phase 4" },
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText("0x3fDB7506411C7C899fb739cF5a4bE3C36d7953D1");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="tokenomics" className="py-16 px-4 bg-[#f1f0f0] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-serif">
            <span className="text-black">Tokenomics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent and strategic allocation designed for sustainable growth
            and community value
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Animated Pie Chart */}
          <div className="relative w-72 h-72 mx-auto group">
            <div
              className="absolute inset-0 rounded-full shadow-xl transform group-hover:scale-105 transition-all"
              style={{
                background: `conic-gradient(
                  #4CAF50 0% 40%,
                  #2196F3 40% 65%,
                  #FF9800 65% 90%,
                  #F44336 90% 100%
                )`,
              }}
            >
              <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-800">
                  <span className="text-4xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    100M
                  </span>
                  <span className="block text-sm text-gray-500 mt-1">
                    Total Supply
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Allocation Details */}
          <div className="space-y-6">
            {allocations.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center`}
                >
                  <span className="text-white font-medium">
                    {item.percentage}%
                  </span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  {item.phase && (
                    <p className="text-gray-500 text-sm mt-1">
                      <span className="font-medium">Locked until:</span>{" "}
                      {item.phase}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap Timeline */}
        <div className="mt-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-green-500 rounded-full" />

          <div className="space-y-20 pl-8">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute -left-14 top-2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">03</span>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Token Burning Phase
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  25% of total supply will be strategically burned through
                  verified smart contracts, creating deflationary pressure and
                  enhancing long-term value for holders.
                </p>
              </div>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <div className="absolute -left-14 top-2 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">04</span>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Fund Activation Phase
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic release of ETF reserves (25%) and team allocations
                  (10%) under community-governed vesting schedules to ensure
                  ecosystem stability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Address Section */}

        <div className="mt-20 text-center">
          <div className="inline-block bg-white p-6 rounded-2xl shadow-lg">
            <p className="text-gray-600 mb-3 text-sm uppercase tracking-wide">
              Verified Contract Address
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 bg-gray-100 rounded-xl px-6 py-3">
                <code className="text-gray-800 font-mono text-lg">
                  0x3fDB...53D1
                </code>
                <button
                  onClick={copyAddress}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                  title="Copy address"
                >
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
              {copied && (
                <span className="text-green-600 font-medium flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-30" />
    </section>
  );
};

export default TokenomicsSection;
