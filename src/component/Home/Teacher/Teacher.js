import React from 'react';
import teacher1 from '../../../Image/Ellipse 90.png'
import teacher2 from '../../../Image/Ellipse 91.png'
import teacher3 from '../../../Image/Ellipse 92.png'
import TeacherCard from '../TeacherCard/TeacherCard';

const teacherData = [
    {
        description: 'Engilsh Spoke Mentors',
        name: 'wilams',
        image: teacher1
    },
    {
        description: 'Quran mentors ',
        name: 'ben cutting',
        image: teacher2
    },
    {
        description: 'English Grammer Mentors',
        name: 'Arfin',
        image: teacher3
    },
]


const Teacher = () => {
    return (
        <section>
            <div className="text-center mt-3 my-3 py-5">
                <h4 style={{ color: '#1cc7c1' }}>Teacher</h4>
                <h1 className="mt-3">Our Best Teacher</h1>
            </div>
            <div className="container">
                <div className="">
                    <div className="row">
                        {
                            teacherData.map(teacher => <TeacherCard teacher={teacher}></TeacherCard>)
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Teacher;