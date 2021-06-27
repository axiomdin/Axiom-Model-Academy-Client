import React from 'react';
import './Subject.css'
import { useState, useEffect } from 'react';
import SubjectCard from '../SubjectCard/SubjectCard';


const Subject = () => {
    const [subject, setSubject] = useState([])
    useEffect(() => {
        fetch('https://evening-plains-79635.herokuapp.com/subject')
            .then(res => res.json())
            .then(data => setSubject(data))
    }, [])

    return (
        <section>
            <div className="text-center mt-3 my-3 py-5">
                <h4 style={{ color: '#1cc7c1' }}>Subject</h4>
                <h1 className="mt-3">Choose Your Favourite Subject</h1>
            </div>
            <div className="container">
                <div className="">
                    <div className="row">
                        {
                            subject.map(Sub => <SubjectCard Subject={Sub}></SubjectCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subject;