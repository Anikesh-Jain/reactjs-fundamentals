import React from "react";
import { useParams } from "react-router-dom";

const CoursesDetails = () => {
  const params = useParams();

  console.log(params.courseId);

  return (
    <div>
      <h1>{params.courseId} Courses Details Page!</h1>
    </div>
  );
};

export default CoursesDetails;
