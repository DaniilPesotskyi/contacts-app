const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
  contactTypes: [
    {
      id: 1,
      name: 'Personal',
    },
    {
      id: 2,
      name: 'Work',
    },
    {
      id: 3,
      name: 'Medicine',
    },
    {
      id: 4,
      name: 'Gov',
    },
  ],
};

export default initialState;
