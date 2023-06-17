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
      active: false,
    },
    {
      id: 2,
      name: 'Work',
      active: false,
    },
    {
      id: 3,
      name: 'Medicine',
      active: false,
    },
    {
      id: 4,
      name: 'Gov',
      active: false,
    },
  ],
  activeTypes: [],
};

export default initialState;
