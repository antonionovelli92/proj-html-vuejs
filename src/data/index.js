
// Creo una lista array per le voci nell'header
const listHeader = ['Home', 'Service', 'Courses', 'About', 'FAQ', 'Blog', 'Contact Us']

// Creo una lista array per la sezione 'service' nella sezione di sinistra
const listChessEdu = [
    'Build self-regulation and motivation',
    'Help with concentration issues',
    'Learm to plan, organize, and prioritize',
    'Regulate emotions',
    'Learn to pay attention to detail',

]

// creo una lista array di oggetti per la section service
const listService = {
    chess: [
      {
        image: '/img/mt-2236-home-icon1.png',
        title: 'Various Age Groups',
        content:'We provide chess classes to both children from 5 years old and adults.'
    },
    {
        image: '/img/mt-2236-home-icon2.png',
        title: 'Top Chess Variants',
        content:'We don’t only teach classical chess but also other top variants of this game.'
    },
    {
        image: '/img/mt-2236-home-icon3.png',
        title: 'Best Chess Players',
        content:'Our alumni have won many prestigious chess tournaments in the country.'
    },
    {
        image: '/img/mt-2236-home-icon4.png',
        title: 'Best Chess Openings',
        content:'Our students know all the best chess openings and how to use them.'
    },
  ]
    
}
// Creo una lista array di oggi per la section Courses
const listCourses = {
    course: [
        {
            image: '/img/mt-2236-home-img1.jpg',
            title: 'Garry Kasparov Masterclass Lesson',
            content: 'Learn the tips, tricks, and strategies. More trips and tricks, check out',
            price: '$456'
        },
        {
            image: '/img/mt-2236-home-img2.jpg',
            title: 'Online Chess Lessons for Beginners',
            content: 'Catered to adult beginners who have a few hours a week to practice',
            price: '$205'
        },
        {
            image: '/img/mt-2236-home-img3.jpg',
            title: 'International Chess School Online',
            content: 'Chess lessons for children and adults held completely online',
            price: '$356'
        },
       
    ]
}


export {  listHeader, listChessEdu,listService,listCourses }

