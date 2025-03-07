import { FaTelegram } from "react-icons/fa";
import { SiGmail, SiX } from "react-icons/si";

interface ContactCardProps {
  platform: string;
  icon: React.ReactNode;
  text: string;
  link: string;
  color: string;
}

const ContactCard = ({
  platform,
  icon,
  text,
  link,
  color,
}: ContactCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105 ${color}`}
  >
    <div className="mb-4 text-4xl">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{platform}</h3>
    <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">
      {text}
    </p>
    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent to-transparent via-current opacity-0 group-hover:opacity-30 transition-opacity" />
  </a>
);

export const ContactSection = () => {
  const contactItems = [
    {
      platform: "Email",
      icon: <SiGmail className="text-red-500" />,
      text: "projectanant2024@gmail.com",
      link: "mailto:projectanant2024@gmail.com",
      color: "hover:text-red-500",
    },
    // {
    //   platform: "Instagram",
    //   icon: <FaInstagram className="text-gradient-to-r from-purple-500 to-pink-500 text-pink-500 bg-clip-text text-transparent " />,
    //   text: "@projectanant2024",
    //   link: "https://instagram.com/projectanant2024",
    //   color: "hover:text-pink-600"
    // },
    {
      platform: "X (Twitter)",
      icon: <SiX className="text-black" />,
      text: "@ProjectAnt25743",
      link: "https://x.com/ProjectAnt25743",
      color: "hover:text-black",
    },
    {
      platform: "Telegram",
      icon: <FaTelegram className="text-blue-500" />,
      text: "Join our channel",
      link: "https://t.me/projectanantcoin",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <section id="contact" className="min-h-[50%] bg-[#f1f0f0] py-20 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactItems.map((item, index) => (
            <ContactCard
              key={index}
              platform={item.platform}
              icon={item.icon}
              text={item.text}
              link={item.link}
              color={item.color}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Connect with us through any platform above
            <br />
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};
