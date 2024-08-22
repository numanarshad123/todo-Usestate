
import React, { useState } from "react";


const StudentList = () => {
  const [students, setStudents] = useState([
    { name: "Numan Arshad", rollNo: 1, fatherName: "Arshad Ali" },
    { name: "Rohab Arshad", rollNo: 2, fatherName: "Arshad Ali" },
    { name: "Azhan Arshad", rollNo: 3, fatherName: "Arshad Ali" },
  ]);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>Name:</strong> {student.name} |{" "}
            <strong>Roll No:</strong> {student.rollNo} |{" "}
            <strong>Father's Name:</strong> {student.fatherName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
