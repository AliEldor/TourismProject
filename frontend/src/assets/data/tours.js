import tourImg01 from "../images/temple-of-bacchus.jpg";
import tourImg02 from "../images/cedars2.jpg";
import tourImg03 from "../images/sidon-castle.jpg";
import tourImg04 from "../images/sakhret-rawshe.jpg";
import tourImg05 from "../images/beiteldin-palace.jpg";
import tourImg06 from "../images/jeita-grotto.jpg";
import tourImg07 from "../images/horsh-ehden.jpg";
import tourImg08 from "../images/Faraya.jpg";
import tourImg09 from "../images/waterfall.jpg";
import tourImg10 from "../images/harrisa.jpg";

const tours = [
  {
    id: "01",
    title: "Temple Of Bacchus, Lebanon",
    city: "Baalbek",
    distance: 300,
    address: "Kharayeb",
    price: 10,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "Ali Eldor",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Cedars Of Barouk, Lebanon",
    city: "Cedars ",
    distance: 400,
    address: "Kharayeb",
    price: 5,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Youssef Roumieh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Sea Castle, Lebanon",
    city: "Saida",
    distance: 500,
    address: "Kharayeb",
    price: 20,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Karim burshali",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Raouche, Lebanon",
    city: "Beirut",
    distance: 500,
    address: "Kharayeb",
    price: 0,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Wissam Atwi",
        rating: 4.6,
      },
      {
        name: "Ashraf Khalil",
        rating: 4.9,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Beiteddine Palace, Lebanon",
    city: "Mount Labanon",
    distance: 500,
    address: "Kharayeb",
    price: 25,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Jeita Grotto, Lebanon",
    city: "Jeita",
    distance: 500,
    address: "Kharayeb",
    price: 30,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Amanie Khalaf",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Horsh Ehden , Lebanon",
    city: "Ehden",
    distance: 500,
    address: "Kharayeb",
    price: 20,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Cyrine Khalaf",
        rating: 4.6,
      },
      {
        name: "Alaa AA",
        rating: 4.1,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Faraya Mountains, Lebanon",
    city: "Beirut",
    distance: 500,
    address: "Kharayeb",
    price: 25,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Hadi Awada",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
