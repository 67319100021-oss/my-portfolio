import ProjectCard from "./ProjectCard";
export default function Projects() {
  const projects = [
    { id: 1, title: "Quote Generator", tag: "JavaScript" },
    { id: 2, title: "BMI Calculator", tag: "JavaScript" },
  ];

  return (
    <section className="text-center py-5 px-8">
      <h2 className="text-4xl font-bold mb-5">ผลงานของฉัน</h2>
      <div className="grid gap-4 justify-center">
    
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tag={project.tag}
          />
        ))}

      </div>
    </section>
  );
}