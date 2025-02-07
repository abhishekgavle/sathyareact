import { configureStore, createSlice } from "@reduxjs/toolkit";


// Product slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    Veg: [
      { name: 'tomato', price: 200.5, image: 'tomato.jpeg' },
  { name: 'potato', price: 500.4, image: 'patato.jpeg' },
  { name: 'paneer', price: 604.6, image: 'panner.jpeg' },
  { name: 'onion', price: 700.2, image: 'onion.jpeg' },
  { name: 'carrot', price: 150.3, image: 'carrot.jpeg' },
  { name: 'broccoli', price: 300.7, image: 'broccoli.jpeg' },
  { name: 'spinach', price: 120.2, image: 'spainach.jpeg' },
  { name: 'cucumber', price: 250.1, image: 'cucuber.jpeg' },
  { name: 'garlic', price: 400.4, image: 'garlic.jpeg' },
  { name: 'ginger', price: 350.9, image: 'ginger.jpeg' },
  { name: 'bell pepper', price: 800.8, image: 'bellpeper.webp' },
  { name: 'green beans', price: 600.5, image: 'blanch green.jpeg' },
  { name: 'cauliflower', price: 320.7, image: 'cauliflower.jpeg' },
  { name: 'zucchini', price: 210.6, image: 'zucchini.jpeg' },
  { name: 'peas', price: 180.3, image: 'peas.jpeg' },
  { name: 'avocado', price: 450.5, image: 'avocado.jpeg' },
  { name: 'lettuce', price: 90.8, image: 'lettuce.jpeg' },
  { name: 'eggplant', price: 420.6, image: 'eggplant.jpeg' },
  { name: 'mushrooms', price: 650.9, image: 'mushrooms.jpeg' },
  { name: 'sweet corn', price: 350.1, image: 'sweetcorn.jpeg' },
  { name: 'cabbage', price: 220.3, image: 'cabbage.jpeg' },
  { name: 'asparagus', price: 550.7, image: 'asparagus.jpeg' },
  { name: 'radish', price: 130.8, image: 'radish.jpeg' },
  { name: 'pumpkin', price: 300.5, image: 'pumpkin.jpeg' },

    ],
    NONveg: [
      { name: 'chicken', price: 6542, image: 'chiken.jpeg' },
      { name: 'mutton', price: 645.4, image: 'mutton.jpeg' },
      { name: 'fish', price: 675.4, image: 'fish.jpeg' },
      { name: 'prawns', price: 845.4, image: 'prawans.jpeg' },
      { name: 'beef', price: 1300.5, image: 'beef.jpeg' },
      { name: 'duck', price: 1200.7, image: 'duck.jpeg' },
      { name: 'salmon', price: 2500.8, image: 'salmon.jpeg' },
      { name: 'lobster', price: 3500.9, image: 'lobster.jpeg' },
      { name: 'crab', price: 1200.3, image: 'crab.jpeg' },
     
    
    ],
    Milk: [  
      { name: 'Amul Gold Full Cream Milk', price: 65.4, image: 'Amul.jpeg' },  
      { name: 'Nandini Good Life Toned Milk', price: 58, image: 'Nandini.jpeg' },  
      { name: 'Mother Dairy Full Cream Milk', price: 62, image: 'MotherDairy.jpeg' },  
      { name: 'Nestle A+ Slim Milk', price: 75, image: 'Nestle.jpeg' },  
      { name: 'Heritage Farm Fresh Milk', price: 64, image: 'Heritage.jpeg' },  
      { name: 'Pride of Cows Organic Milk', price: 120, image: 'https://prideofcows.in/prideofcows/storage/upload/kaAYzPHpXKs8qjaojDq9O8EQJ4Kb3zkT.png' },  
      { name: 'Country Delight Cow Milk', price: 82, image: 'https://th.bing.com/th/id/OIP.A4th-I3C6jbIPr7cjL4NOgHaHa?rs=1&pid=ImgDetMain' },  
      { name: 'Dairy Best Buffalo Milk', price: 72, image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/06c99327418999.58d22c0c9780e.jpg' },  
      { name: 'Aavin Tetra Pak Toned Milk', price: 50, image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90014846_XL1.jpg' },  
      { name: 'Britannia UHT Milk', price: 70, image: 'https://adamscreation.com/images/work/britannia/milk.jpg' },  
      { name: 'Ananda Full Cream Milk', price: 69, image: 'https://ananda.in/wp-content/uploads/2020/12/double-toned-milk-min.webp' },  
      { name: 'Sanchi Premium Milk', price: 66, image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/LZ/JF/FU/125779254/sanchi-milk-1000x1000.jpg' },  
      { name: 'Sri Sri Tattva Cow Milk', price: 90, image: 'https://tiimg.tistatic.com/fp/1/007/516/sri-sri-nutrition-enriched-pure-and-natural-100-cows-milk-deshi-ghee-563.jpg' },  
     
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
