import activityImg01 from '../images/tour-img01.jpg'
import activityImg02 from '../images/tour-img02.jpg';
import activityImg03 from '../images/tour-img03.jpg';
// Add more activity images as needed

const activities = [
  {
    id: '01',
    title: 'Activity 1',
    city: 'City 1',
    distance: 300,
    address: 'Address 1',
    price: 10,
    maxGroupSize: 10,
    desc: 'This is the description for Activity 1',
    reviews: [
      {
        name: 'Review 1',
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: activityImg01,
    featured: true,
  },
  {
    id: '02',
    title: 'Activity 2',
    city: 'City 2',
    distance: 400,
    address: 'Address 2',
    price: 5,
    maxGroupSize: 8,
    desc: 'This is the description for Activity 2',
    reviews: [
      {
        name: 'Review 2',
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: activityImg02,
    featured: true,
  },
  {
    id: '03',
    title: 'Activity 3',
    city: 'City 3',
    distance: 500,
    address: 'Address 3',
    price: 20,
    maxGroupSize: 8,
    desc: 'This is the description for Activity 3',
    reviews: [
      {
        name: 'Review 3',
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: activityImg03,
    featured: true,
  },
  // Add more activities as needed
];

export default activities;
