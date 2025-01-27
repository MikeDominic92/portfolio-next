export default function Experience() {
  const experiences = [
    {
      company: "AlgoPro Solutions",
      position: "Technical Support Engineer",
      period: "Jan 2021 - Present",
      achievements: [
        "Enhanced system efficiency by 40% through Python-based automation",
        "Reduced issue resolution time by 50% using agent-based RAG models",
        "Achieved 99.9% system uptime with Kubernetes and Docker-based CI/CD pipelines",
        "Improved onboarding processes by 30% with automated workflows"
      ]
    },
    {
      company: "Pho House & Hong Thanh",
      position: "Co-Owner & Technical Lead",
      period: "May 2014 - Apr 2020",
      achievements: [
        "Managed operations for two restaurants with $750,000 to $1,000,000 annual revenue",
        "Developed custom POS system with cloud-based inventory tracking",
        "Leveraged Python scripting to automate sales reporting",
        "Led a team of over 20 employees, improving customer satisfaction by 25%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 hover:bg-gray-700 transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-500">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li
                    key={achievementIndex}
                    className="text-gray-300 flex items-start"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
