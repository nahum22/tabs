import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uudiv4 } from "uuid";

function Duties({ duties }) {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uudiv4();
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />;<p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Duties;
