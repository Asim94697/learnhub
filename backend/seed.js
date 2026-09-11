require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('./models/Course');
const Course = require('./models/Course');

const sampleCourses = [
    {
        title: 'Web Development',
        description: 'Learn to bulid modern websites from scratch using HTML, CSS, and JavaSscript',
        instructor: 'Sarah Ahmed',
        duration: '8 Weeks',
        level: 'Beginner',
        price: '49',
        category: 'Web Development',
        image: 'https://images.unplash.com/photo-1547658719-da2b511691?w=600',
    },

    {
        title: 'JavaScript Essentials',
        description: 'Master JavaScript fundamentals: variable, functions, array, objects, and DOM',
        instructor: 'Bilal Khan',
        duration: '6 Weeks',
        level: 'Beginner',
        price: '39',
        category: 'Programming',
        image: 'https://images.unplash.com/photo-1579468118864=1b9ea3c0db4a?w=600',
    },

    {
        title: 'React.js for Beginners',
        description: 'Build interactive user interfaces with components, props, state, and hooks',
        instructor: 'Ayesha Malik',
        duration: '3 Weeks',
        level: 'Beginner',
        price: '59',
        category: 'Frontend',
        image: 'https://images.unplash.com/photo-1633356122544-f134324a6cee?w=600',
    },

    {
        title: 'Node.js & Express',
        description: 'Bulid powerful backend servers and REST APIs eith Node.js and Express',
        instructor: 'Hamza Sheikh',
        duration: '5 Weeks',
        level: 'Intermediate',
        price: '59',
        category: 'backend',
        image: 'https://images.unplash.com/photo-16273982-da2b511691?w=600',
    },

    {
        title: 'MongoDB Database',
        description: 'Learn NoSQL database, schemas, and Mongoose to store real application data',
        instructor: 'Fatima noor',
        duration: '4 Weeks',
        level: 'Intermediate',
        price: '49',
        category: 'Database',
        image: 'https://images.unplash.com/photo-1547658719-da2b511691?w=600',
    },

    {
        title: 'Full Stack Develpoment',
        description: 'combine React, Node.js, Exprss, and MongoDB to bulid copmlete applications',
        instructor: 'Usman Taqiq',
        duration: '10 Weeks',
        level: 'Advanceed',
        price: '99',
        category: 'Full Stack',
        image: 'https://images.unplash.com/photo-1547658719-da2b511691?w=600',
    },
]

mongoose.connect(process.env.MONGO_URI).then(async () =>{
    await Course.deleteMany();
    await Course.insertMany(sampleCourses);
    console.log("sample courses added to Mongo Altas");
    mongoose.connection.close();
})
.catch((error)=> console.error('Seed error:', error.message));