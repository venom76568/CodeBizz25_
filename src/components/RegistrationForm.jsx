import React, { useState } from "react";

const RegistrationForm = () => {
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamMembers: 4, // Default team size is 4
    members: Array(5).fill({
      fullName: "",
      email: "",
      whatsapp: "",
      gender: "",
      age: "",
      year: "",
      department: "",
      rollNumber: "",
    }),
  });

  const [activeMember, setActiveMember] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e, index, field) => {
    const updatedMembers = [...teamData.members];
    updatedMembers[index] = {
      ...updatedMembers[index],
      [field]: e.target.value,
    };
    setTeamData({ ...teamData, members: updatedMembers });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending team data:", teamData); // Debugging the data before sending

    try {
      const response = await fetch(
        "https://codebizz-backend.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(teamData),
        }
      );

      if (response.ok) {
        setMessage("Registration successful!");
        setTeamData({
          teamName: "",
          teamMembers: 4,
          members: Array(5).fill({
            fullName: "",
            email: "",
            whatsapp: "",
            gender: "",
            age: "",
            year: "",
            department: "",
            rollNumber: "",
          }),
        });
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setMessage(errorData.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id="register"
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom right, #0a0010, #000000)",
      }}
    >
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        style={{
          color: "#8a00b3",
          textShadow: "0 0 15px #8a00b3, 0 0 30px #650080, 0 0 45px #8a00b3",
          animation: "pulseDarkerPurple 2s infinite alternate",
        }}
      >
        Team Registration
      </h1>

      <div className="bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-3xl border border-purple-800">
        <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">
          Register Your Team
        </h2>
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="teamName"
              className="block text-sm font-medium text-purple-400"
            >
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={teamData.teamName}
              onChange={(e) =>
                setTeamData({ ...teamData, teamName: e.target.value })
              }
              className="w-full px-3 py-2 mt-1 bg-black text-purple-300 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="teamMembers"
              className="block text-sm font-medium text-purple-400"
            >
              Number of Team Members
            </label>
            <select
              id="teamMembers"
              name="teamMembers"
              value={teamData.teamMembers}
              onChange={(e) =>
                setTeamData({
                  ...teamData,
                  teamMembers: parseInt(e.target.value),
                })
              }
              className="w-full px-3 py-2 mt-1 bg-black text-purple-300 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            >
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>

          <div className="mb-6">
            <p className="text-purple-400 mb-4">
              Click to edit member details:
            </p>
            <div className="flex gap-4 justify-center">
              {Array.from({ length: teamData.teamMembers }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className="py-2 px-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg"
                  onClick={() =>
                    setActiveMember(activeMember === index ? null : index)
                  }
                >
                  Member {index + 1}
                </button>
              ))}
            </div>
          </div>

          {activeMember !== null && (
            <div className="border border-purple-700 p-4 rounded-lg mb-4">
              <h3 className="text-purple-400 font-bold text-lg mb-4">
                Member {activeMember + 1} Details
              </h3>
              {[
                { label: "Full Name", field: "fullName", type: "text" },
                { label: "Email Address", field: "email", type: "email" },
                { label: "WhatsApp Number", field: "whatsapp", type: "tel" },
                { label: "Gender", field: "gender", type: "text" },
                { label: "Age", field: "age", type: "number" },
                { label: "Year (e.g., 1st, 2nd)", field: "year", type: "text" },
                { label: "Department", field: "department", type: "text" },
                { label: "Roll Number", field: "rollNumber", type: "text" },
              ].map(({ label, field, type }) => (
                <div className="mb-2" key={field}>
                  <label
                    htmlFor={`${field}-${activeMember}`}
                    className="block text-sm text-purple-400"
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    id={`${field}-${activeMember}`}
                    name={`${field}-${activeMember}`}
                    value={teamData.members[activeMember][field]}
                    onChange={(e) => handleChange(e, activeMember, field)}
                    className="w-full px-3 py-1.5 mt-1 bg-black text-purple-300 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
                    required
                  />
                </div>
              ))}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes pulseDarkerPurple {
            0% { text-shadow: 0 0 15px #8a00b3, 0 0 30px #650080; }
            100% { text-shadow: 0 0 20px #c200ff, 0 0 40px #8a00b3; }
          }
        `}
      </style>
    </section>
  );
};

export default RegistrationForm;
