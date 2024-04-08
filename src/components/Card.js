import React from 'react';
import { FcLike } from 'react-icons/fc';

export const Card = ({course}) => {
    // let course = props.course;
    return(
  <div>
    <div>
        <img src={course.image.url} alt="" />
    </div>
    <div>
        <FcLike/>
    </div>
    <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
    </div>
  </div>
)}
export default Card;