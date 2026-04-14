import "./Blog.css";

export default function Blog() {
  const blogs = [
    {
      title: "How to Manage Stress for Better Mental Health",
      category: "Mental Health",
      desc: "Simple techniques to reduce stress and improve emotional well-being.",
    },
    {
      title: "Understanding Diabetes: Causes, Symptoms & Prevention",
      category: "Chronic Diseases",
      desc: "A complete guide to controlling blood sugar and maintaining a healthy lifestyle.",
    },
    {
      title: "Why Regular Health Checkups Are Important",
      category: "Preventive Care",
      desc: "Early detection saves lives. Learn why yearly checkups matter.",
    },
    {
      title: "Monsoon Health Tips: Stay Safe This Season",
      category: "Seasonal Health",
      desc: "Protect yourself from infections and water-borne diseases.",
    },
    {
      title: "How to Manage Stress for Better Mental Health",
      category: "Mental Health",
      desc: "Simple techniques to reduce stress and improve emotional well-being.",
    },

    {
      title: "Child Vaccination Schedule Explained",
      category: "Pediatrics",
      desc: "Everything parents need to know about immunization.",
    },
    {
      title: "Healthy Aging: Tips for Seniors",
      category: "Senior Care",
      desc: "Improve mobility, diet, and mental health in later years.",
    },
    {
      title: "How to Manage Stress for Better Mental Health",
      category: "Mental Health",
      desc: "Simple techniques to reduce stress and improve emotional well-being.",
    },
    {
      title: "Monsoon Health Tips: Stay Safe This Season",
      category: "Seasonal Health",
      desc: "Protect yourself from infections and water-borne diseases.",
    },
  ];

  return (
    <div className="blog-page">
      {/* HERO */}
      <div className="blog-hero">
        <h1>Health & Wellness Blog</h1>
        <p>
          Expert medical insights, preventive care tips, and professional
          healthcare guidance from Medanta Hospital.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="blog-wrapper">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <span className="badge">{blog.category}</span>
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            <button className="read-btn"> By Medanta</button>
          </div>
        ))}
      </div>
    </div>
  );
}