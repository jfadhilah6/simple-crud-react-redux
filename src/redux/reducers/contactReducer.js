const initialState = [
  {
    id: 1,
    name: "Jihan Fadhilah",
    email: "jihan.fadhilah6@gmail.com",
    number: 81311388864
  },
  {
    id: 2,
    name: "Latifa Dhaniasari",
    email: "latifadhania@gmail.com",
    number: 81310950850
  },
  {
    id: 3,
    name: "Tri Palupi",
    email: "trip@gmail.com",
    number: 81317976783
  },
  {
    id: 4,
    name: "Dhimas Alim Saputro",
    email: "dhimas123@gmail.com",
    number: 85781151981
  },
  {
    id: 5,
    name: "Anggita Prastiwi",
    email: "anggittt@gmail.com",
    number: 81310950834
  },
  {
    id: 6,
    name: "Raihan Abdul Azis",
    email: "raihanaa@gmail.com",
    number: 85710760841
  },
  {
    id: 7,
    name: "Adi Setyo Nugroho",
    email: "adisetyo@gmail.com",
    number: 85710950890
  },
  {
    id: 8,
    name: "Naufal Rizki Pratama",
    email: "nopalll@gmail.com",
    number: 81210980853
  },
  {
    id: 9,
    name: "Daffa Arya Pratama",
    email: "aryapratama@gmail.com",
    number: 85717650855
  },
  {
    id: 10,
    name: "Kusniati",
    email: "sikus@gmail.com",
    number: 896318950878
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    case "DELETE_CONTACT":
      const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
      state = filterContacts;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
