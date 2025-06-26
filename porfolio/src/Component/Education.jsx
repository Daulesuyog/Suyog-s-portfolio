import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-5 text-center bg-white">
      <h2>Education</h2>
      <div className="container mt-4">
        <table className="table table-bordered">
          <thead className="table-secondary">
            <tr>
              <th>Degree</th>
              <th>Institution</th>
              <th>Year</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.E. (IT Engineering)</td>
              <td>Amrutvahini College Of Engineering Sangamner </td>
              <td>2026</td>
              <td>ongoing</td>
            </tr>
            <tr>
              <td>HSC</td>
              <td>New Arts, Commerce and Science College Ahilyanagar</td>
              <td>2022</td>
              <td>76.17%</td>
            </tr>
            <tr>
              <td>SSC</td>
              <td>Shri Samarth Sadguru Kisangiribaba Vidyalaya Usthal</td>
              <td>2020</td>
              <td>89.80%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Education;
