import {React, useState} from 'react';
import Card from './Card';

export const Cards = (props) => {

    let courses = props.courses
    let category = props.category

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses(){
        if(category === "All"){
            let allCourses = [];
             Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        });
          return allCourses;
        }
        else{
            return courses[category];
        }
    }
    
  return (
    <div className='flex flex-wrap ml-[100px] gap-[20px] p-3'>
         {getCourses().map((course) => (
            <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        ))}
    </div>
  );
};

export default Cards;
