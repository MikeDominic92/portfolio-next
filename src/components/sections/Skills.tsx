export default function Skills() {
  const skills = [
    {
      category: "Cloud & Infrastructure",
      items: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform"]
    },
    {
      category: "Programming & Automation",
      items: ["Python", "RAG Models", "Bash", "PowerShell"]
    },
    {
      category: "DevOps & CI/CD",
      items: ["Jenkins", "GitHub Actions", "GitLab CI"]
    },
    {
      category: "Security",
      items: ["Vulnerability Assessment", "SSL/TLS", "Secure Configurations"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillSet, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-4">
                {skillSet.category}
              </h3>
              <ul className="space-y-2">
                {skillSet.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
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
