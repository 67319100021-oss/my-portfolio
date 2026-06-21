export default function ProjectCard({ title, tag }) {
  return (
    <div className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
        {tag}
      </span>
    </div>
  );
}