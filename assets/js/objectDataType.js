const fauzan = {
  fullName: "Fauzan Ramdhani",
  address: {
    city: "Bandung",
    province: "West Java",
    country: "Indonesia",
  },
  class: {
    id: 2,
    name: "Fullstack Web - 2",
  },
};

const ucup = {
  name: "Ucup Jamal",
  address: {
    city: "Medan",
    province: "South Sumatera",
    country: "Indonesia",
  },
  class: {
    id: 2,
    name: "Fullstack Web - 2",
  },
};

ucup.university = "UNIKOM Bandung";
fauzan.fullName = "Muhammad Fauzan Ramdhani";

const describeFauzanv1 =
  fauzan.fullName +
  " is from " +
  fauzan.address.city +
  ", " +
  fauzan.address.province +
  " and he is studen of " +
  fauzan.class.name +
  "'s class";

const describeFauzanv2 = `${fauzan.fullName} is from ${fauzan.address.city}, ${fauzan.address.province} and he is student of ${fauzan.class.name}'s class`;
console.log(describeFauzanv1);
console.log(describeFauzanv2);
