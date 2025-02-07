import { configureStore, createSlice } from "@reduxjs/toolkit";


// Product slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    Veg: [
      { name: 'tomato', price: 200.5, image: '/public/tomato.jpeg' },
  { name: 'potato', price: 500.4, image: '/public/patato.jpeg' },
  { name: 'paneer', price: 604.6, image: '/public/panner.jpeg' },
  { name: 'onion', price: 700.2, image: '/public/onion.jpeg' },
  { name: 'carrot', price: 150.3, image: '/public/carrot.jpeg' },
  { name: 'broccoli', price: 300.7, image: '/public/broccoli.jpeg' },
  { name: 'spinach', price: 120.2, image: '/public/spainach.jpeg' },
  { name: 'cucumber', price: 250.1, image: '/public/cucuber.jpeg' },
  { name: 'garlic', price: 400.4, image: '/public/garlic.jpeg' },
  { name: 'ginger', price: 350.9, image: '/public/ginger.jpeg' },
  { name: 'bell pepper', price: 800.8, image: '/public/bellpeper.webp' },
  { name: 'green beans', price: 600.5, image: '/public/blanch green.jpeg' },
  { name: 'cauliflower', price: 320.7, image: '/public/cauliflower.jpeg' },
  { name: 'zucchini', price: 210.6, image: '/public/zucchini.jpeg' },
  { name: 'peas', price: 180.3, image: '/public/peas.jpeg' },
  { name: 'avocado', price: 450.5, image: '/public/avocado.jpeg' },
  { name: 'lettuce', price: 90.8, image: '/public/lettuce.jpeg' },
  { name: 'eggplant', price: 420.6, image: '/public/eggplant.jpeg' },
  { name: 'mushrooms', price: 650.9, image: '/public/mushrooms.jpeg' },
  { name: 'sweet corn', price: 350.1, image: '/public/sweetcorn.jpeg' },
  { name: 'cabbage', price: 220.3, image: '/public/cabbage.jpeg' },
  { name: 'asparagus', price: 550.7, image: '/public/asparagus.jpeg' },
  { name: 'radish', price: 130.8, image: '/public/radish.jpeg' },
  { name: 'pumpkin', price: 300.5, image: '/public/pumpkin.jpeg' },

    ],
    NONveg: [
      { name: 'chicken', price: 6542, image: '/public/chiken.jpeg' },
      { name: 'mutton', price: 645.4, image: '/public/mutton.jpeg' },
      { name: 'fish', price: 675.4, image: '/public/fish.jpeg' },
      { name: 'prawns', price: 845.4, image: '/public/prawans.jpeg' },
      { name: 'beef', price: 1300.5, image: '/public/beef.jpeg' },
      { name: 'duck', price: 1200.7, image: '/public/duck.jpeg' },
      { name: 'salmon', price: 2500.8, image: '/public/salmon.jpeg' },
      { name: 'lobster', price: 3500.9, image: '/public/lobster.jpeg' },
      { name: 'crab', price: 1200.3, image: '/public/crab.jpeg' },
     
    
    ],
    Milk: [  
      { name: 'Amul Gold Full Cream Milk', price: 65.4, image: '/public/Amul.jpeg' },  
      { name: 'Nandini Good Life Toned Milk', price: 58, image: '/public/Nandini.jpeg' },  
      { name: 'Mother Dairy Full Cream Milk', price: 62, image: '/public/MotherDairy.jpeg' },  
      { name: 'Nestle A+ Slim Milk', price: 75, image: '/public/Nestle.jpeg' },  
      { name: 'Heritage Farm Fresh Milk', price: 64, image: '/public/Heritage.jpeg' },  
      { name: 'Pride of Cows Organic Milk', price: 120, image: '/public/PrideOfCows.jpeg' },  
      { name: 'Country Delight Cow Milk', price: 82, image: '/public/CountryDelight.jpeg' },  
      { name: 'Dairy Best Buffalo Milk', price: 72, image: '/public/DairyBest.jpeg' },  
      { name: 'Aavin Tetra Pak Toned Milk', price: 50, image: '/public/Aavin.jpeg' },  
      { name: 'Britannia UHT Milk', price: 70, image: '/public/Britannia.jpeg' },  
      { name: 'Ananda Full Cream Milk', price: 69, image: '/public/Ananda.jpeg' },  
      { name: 'Sanchi Premium Milk', price: 66, image: '/public/Sanchi.jpeg' },  
      { name: 'Sri Sri Tattva Cow Milk', price: 90, image: '/public/SriSri.jpeg' },  
      { name: 'Jersey Toned Milk', price: 60, image: '/public/Jersey.jpeg' },  
      { name: 'Gowardhan Full Cream Milk', price: 68, image: '/public/Gowardhan.jpeg' }  
    ]
    
  },
  reducers: {}
});

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(item => item.name !== action.payload.name);
      }
    },
    removeItem: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
    clearCart: () => []
  }
});

// Purchase Details Slice
const purchaseDetailsSlice = createSlice({
  name: 'purchaseDetails',
  initialState: [],
  reducers: {
    addPurchaseDetails: (state, action) => {
      state.push(action.payload);
    }
  }
});

// Define the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("username") ? true : false,
    user: localStorage.getItem("username") || "",
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = "";
      localStorage.removeItem("username");
    }
  }
});

// Configure the store
const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    purchaseDetails: purchaseDetailsSlice.reducer,
  },
});

// Export actions from the slices
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart } = cartSlice.actions;
export const { addPurchaseDetails } = purchaseDetailsSlice.actions;
export const { login, logout } = authSlice.actions; // Fixed export with 'const'

// Export the store
export default store;
