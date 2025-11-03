import React from "react";
import MemberCard from "./MemberCard.jsx";

function App() {
  const teamMembers = [
    { name: "มิ้น", role: "Backend Developer", avatar: "profile boy.jpg" },
    { name: "อุ้ม", role: "Frontend Developer", avatar: "profile girl 2.jpg" },
    { name: "โม", role: "UI/UX Designer", avatar: "profile boy 2.jpg" },
  ];
  return (
    <div>
      <h1 className="topic">CodeVerse Studio</h1>
      <div className='container'>
        {teamMembers.map((m) => (
          <MemberCard key={m.name} {...m} />
        ))}
      </div>
    </div>
  );
}

export default App;
