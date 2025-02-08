import { configureStore, createSlice } from "@reduxjs/toolkit";



// Product slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    Veg: [
      { name: 'tomato', price: 200.5, image: 'https://images.pexels.com/photos/162830/tomatoes-tomato-harvest-healthy-food-162830.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' },
  { name: 'potato', price: 500.4, image: 'https://img.freepik.com/premium-photo/new-potato-green-parsley_272595-3005.jpg' },
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
      { name: 'chicken', price: 6542, image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg' },
      { name: 'mutton', price: 645.4, image: 'https://www.thespruceeats.com/thmb/i2zhq0qXPHPz1NZ5xQ-5ILr1jsc=/5001x3329/filters:fill(auto,1)/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg' },
      { name: 'fish', price: 675.4, image: 'https://thumbs.dreamstime.com/b/delicious-roasted-fish-exotic-herbs-spices-homemade-spicy-traditional-roasted-fish-served-green-salads-rustic-140768912.jpg' },
      { name: 'prawns', price: 845.4, image: 'https://www.recipetineats.com/wp-content/uploads/2020/09/Creamy-Garlic-Prawns_8.jpg?resize=650' },

      { name: 'lobster', price: 3500.9, image: 'https://th.bing.com/th/id/OIP.2pvStb9-d1eYE7t2HYhzlAHaKX?rs=1&pid=ImgDetMain' },
      { name: 'crab', price: 1200.3, image: 'https://www.thespruceeats.com/thmb/aFymP_UKEBo36d9wcGacDhoSieQ=/4738x2533/filters:fill(auto,1)/close-up-of-crab-gravy-served-on-table-677147575-588b52995f9b5874ee1af765.jpg' },
     
      { name: 'veal', price: 4800.4, image: 'https://th.bing.com/th/id/OIP.GBE3uk2mnnAlu88g9fctfwHaJk?rs=1&pid=ImgDetMain' },
      { name: 'fish and chips', price: 1600.3, image: 'https://irp-cdn.multiscreensite.com/fb993d3d/dms3rep/multi/fish+and+chips.jpeg' },
      { name: 'sushi rolls', price: 2800.1, image: 'https://vebaresourcecenter.com/wp-content/uploads/2021/12/VEBA_2021-12-03_Sushi.jpg' },
      { name: 'grilled shrimp skewers', price: 2200.9, image: 'https://th.bing.com/th/id/OIP.-Hye1V8IiMNj2ClrmNz-aAAAAA?rs=1&pid=ImgDetMain' },
      { name: 'turkey breast', price: 3500.5, image: 'https://th.bing.com/th/id/OIP.G-UB8bP4MKDUQ3qc_ixjJgHaHa?rs=1&pid=ImgDetMain' },
      { name: 'mutton chops', price: 4000.7, image: 'https://th.bing.com/th/id/OIP.z7k7dzopPOgBhKFd9tZ2agHaE4?rs=1&pid=ImgDetMain' },
      { name: 'fried calamari', price: 2700.4, image: 'https://www.willcookforsmiles.com/wp-content/uploads/2021/07/Calamari-6-1024x1536.jpg' },
      { name: 'roast pork', price: 3300.2, image: 'roast_pork.jpeg' }
      
    ],
    Milk: [  
      { name: 'Amul Gold Full Cream Milk', price: 65.4, image: 'https://rukminim1.flixcart.com/image/612/612/kl9rssw0/cheese/b/i/y/cheese-spread-yummy-plain-cream-cheese-amul-original-imagyfagkgw5fzuw.jpeg?q=70' },  
      { name: 'Nandini Good Life Toned Milk', price: 58, image: 'https://5.imimg.com/data5/ANDROID/Default/2022/3/VD/RV/TK/95978060/product-jpeg-1000x1000.png' },  
      { name: 'Mother Dairy Full Cream Milk', price: 62, image: 'https://th.bing.com/th/id/OIP.SXos4qhsNMDfZ6E4cr89bwHaGQ?rs=1&pid=ImgDetMain' },  
 
 
      { name: 'Pride of Cows Organic Milk', price: 120, image: 'https://prideofcows.in/prideofcows/storage/upload/kaAYzPHpXKs8qjaojDq9O8EQJ4Kb3zkT.png' },  
      { name: 'Country Delight Cow Milk', price: 82, image: 'https://th.bing.com/th/id/OIP.A4th-I3C6jbIPr7cjL4NOgHaHa?rs=1&pid=ImgDetMain' },  
      { name: 'Dairy Best Buffalo Milk', price: 72, image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/06c99327418999.58d22c0c9780e.jpg' },  
      { name: 'Aavin Tetra Pak Toned Milk', price: 50, image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/90014846_XL1.jpg' },  
      { name: 'Britannia UHT Milk', price: 70, image: 'https://adamscreation.com/images/work/britannia/milk.jpg' },  
      { name: 'Ananda Full Cream Milk', price: 69, image: 'https://ananda.in/wp-content/uploads/2020/12/double-toned-milk-min.webp' },  
      { name: 'Sanchi Premium Milk', price: 66, image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/LZ/JF/FU/125779254/sanchi-milk-1000x1000.jpg' },  
      { name: 'Sri Sri Tattva Cow Milk', price: 90, image: 'https://tiimg.tistatic.com/fp/1/007/516/sri-sri-nutrition-enriched-pure-and-natural-100-cows-milk-deshi-ghee-563.jpg' },  
     
    ],
    FastFood:[

      { name: 'Cheeseburger', price: 1200.4, image: 'https://th.bing.com/th/id/OIP.CTe2WazQrkah4cFzrpvLwwHaLH?rs=1&pid=ImgDetMain' },
      { name: 'French Fries', price: 500.3, image: 'https://www.thespruceeats.com/thmb/IHKuXcx3uUI1IWkM_cnnQdFH-zQ=/3485x2323/filters:fill(auto,1)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg' },
      { name: 'Chicken Nuggets', price: 1500.1, image: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1980/https://thetoastedpinenut.com/wp-content/uploads/2017/08/IMG_5288.jpg' },
      { name: 'Pizza Slice', price: 1800.9, image: 'https://st.depositphotos.com/1900347/4146/i/950/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg' },
      { name: 'Hot Dog', price: 1000.5, image: 'https://media.timeout.com/images/103397053/image.jpg' },
      { name: 'Chicken Burger', price: 2000.7, image: 'https://assets.unileversolutions.com/recipes-v2/243652.jpg' },
      { name: 'Onion Rings', price: 700.4, image: 'https://th.bing.com/th/id/OIP.8oZhbEsexOYlcofWl4C6rQHaE7?rs=1&pid=ImgDetMain' },
      { name: 'Milkshake', price: 1200.2, image: 'https://www.julieseatsandtreats.com/wp-content/uploads/2021/06/How-to-Make-a-Milkshake-10-of-10.jpg' },
      { name: 'Fish Sandwich', price: 1400.6, image: 'fish_sandwich.jpeghttps://th.bing.com/th/id/OIP.hf_06MVDDCeGHBbo-PTVKgHaHa?rs=1&pid=ImgDetMain' },
      { name: 'Spicy Chicken Wrap', price: 1600.8, image: 'https://th.bing.com/th/id/OIP.Agxx07wnkwDkqKopjejRQgHaE8?rs=1&pid=ImgDetMain' },
      { name: 'Taco', price: 900.5, image: 'https://images3.alphacoders.com/248/248457.jpg' },
      { name: 'Beef Burrito', price: 1300.2, image: 'https://schweidandsons.com/wp-content/uploads/2020/06/Recipe-Beef-Burritos-scaled.jpg' },
      { name: 'Grilled Chicken Salad', price: 1800.4, image: 'https://www.dinneratthezoo.com/wp-content/uploads/2020/12/grilled-chicken-salad-4.jpg' },
      { name: 'Veggie Burger', price: 1100.7, image: 'https://wallpapercave.com/wp/wp11267667.jpg' },
      { name: 'Loaded Nachos', price: 1400.9, image: 'https://cdn.shopify.com/s/files/1/3008/1030/articles/nachos_-_everything_but_the_tacos_recipe_gustus_vitae_seasoning_spices_750x.jpg?v=1673900360' },
      { name: 'Eggrolls', price: 800.3, image: 'https://foreignfork.com/wp-content/uploads/2020/02/egg-rolls-4.jpg' },
      { name: 'Fried Chicken', price: 2500.6, image: 'https://grandbaby-cakes.com/wp-content/uploads/2016/11/buttermilk-fried-chicken-2.jpg' },
     
    ],
    Snack : [
      { name: 'Chips', price: 300.5, image: 'https://s.yimg.com/uu/api/res/1.2/ikZ8bCtBnORYJ0KRNnLdsg--~B/aD0zMDA5O3c9MzMxMjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w3312/60f81b189736b4b03210d0533cdaaae81d746a8d.jpg' },
      { name: 'Popcorn', price: 200.3, image: 'https://thumbs.dreamstime.com/z/popcorn-3274072.jpg' },
      { name: 'Pretzels', price: 400.7, image: 'https://thumbs.dreamstime.com/z/freshly-baked-soft-pretzel-generous-sprinkling-coarse-sa-salt-close-up-table-horizontal-view-above-95180747.jpg' },
      { name: 'Granola Bar', price: 150.2, image: 'https://www.wellplated.com/wp-content/uploads/2014/02/Almond-Orange-Healthy-Granola-Bars-with-Coconut-and-Honey.jpg' },
      { name: 'Chocolate Bar', price: 250.6, image: 'https://th.bing.com/th/id/OIP.oUqmnvd3VRF9zKsI1SWIOQHaE8?rs=1&pid=ImgDetMain' },
      { name: 'Cheese Sticks', price: 500.8, image: 'https://th.bing.com/th/id/OIP.JwpPPuk5GpjM1Zn1Vib3YwHaHa?rs=1&pid=ImgDetMain' },
      { name: 'Fruit Cup', price: 350.9, image: 'https://th.bing.com/th/id/OIP.bNJH3k9-Ul1Tei5_p9repQHaLH?rs=1&pid=ImgDetMain' },
      { name: 'Cookies', price: 450.4, image: 'https://www.cookingclassy.com/wp-content/uploads/2012/06/no-bake-cookies-77.jpg' },
      { name: 'Trail Mix', price: 600.7, image: 'https://th.bing.com/th/id/R.e273705d25fdb1a9298cc23065b5f11f?rik=ys5ZV8qBtl9E7Q&riu=http%3a%2f%2fwww.halfwayanywhere.com%2fwp-content%2fuploads%2f2013%2f04%2fUltimate-Trail-Mix-Closeup.jpg&ehk=u31N6sE1HNIWqlXJw%2bMdwDYVYT4ZLvfdRGOr17k985I%3d&risl=&pid=ImgRaw&r=0' },
      { name: 'Ice Cream Cone', price: 700.5, image: 'https://th.bing.com/th/id/R.f7241fd211936e8847eb3badee82a912?rik=CYne0CKS3eHu3w&riu=http%3a%2f%2fdel.h-cdn.co%2fassets%2f16%2f50%2f1481580895-gettyimages-126553677.jpg&ehk=ZkPpPUe1ZjIEUoO3osiSMUINOAj7L9NdnXEVlHWcw2w%3d&risl=&pid=ImgRaw&r=0' },
      { name: 'Candy Bar', price: 220.1, image: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--IJjTTTGq--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1540839062301/bars.png' },
      { name: 'Rice Cakes', price: 350.2, image: 'https://www.thespruceeats.com/thmb/lusvphtvVBW5c7O7towQpcEbr8U=/4494x3000/filters:no_upscale():max_bytes(150000):strip_icc()/pan-fried-rice-cakes-2031316-step-08-5c56089e46e0fb0001c089b4.jpg' },
      { name: 'Yogurt Parfait', price: 500.9, image: 'https://www.pumpkinnspice.com/wp-content/uploads/2016/02/berry-honey-yogurt-parfait-2.jpg' },
      { name: 'Apple Slices', price: 300.6, image: 'https://th.bing.com/th/id/OIP.Ul06oYmmMsSTXtGM33u2DgHaJ4?rs=1&pid=ImgDetMain' },
      { name: 'Sliced Veggies', price: 150.8, image: 'https://thumbs.dreamstime.com/z/sliced-vegetables-chopping-board-landscape-close-up-sliced-vegetables-chopping-board-landscape-courgette-basil-herbs-124896162.jpg' }
    ],
    Bakery : [
      { name: 'Croissant', price: 200.5, image: 'https://gluttodigest.com/wp-content/uploads/2018/02/croissant-hybrids-1080x566.jpg' },
      { name: 'Cupcake', price: 150.3, image: 'https://th.bing.com/th/id/OIP.OeAExV8Txnhdm4OH49qTdAHaE8?rs=1&pid=ImgDetMain' },
      { name: 'Muffin', price: 120.9, image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Chocolate-Chip-Muffins_EXPS_TOHAM21_11638_B12_04_1b-1.jpg' },
      { name: 'Donut', price: 180.7, image: 'https://th.bing.com/th/id/OIP.1Cx7N0Q8hHoADynBgtnJ4wHaEM?rs=1&pid=ImgDetMain' },
      { name: 'Bagel', price: 140.4, image: 'https://th.bing.com/th/id/OIP.LFGs7BYr_3CmqCa_-7BcpwHaE_?rs=1&pid=ImgDetMain' },
      { name: 'Cinnamon Roll', price: 210.6, image: 'https://javacupcake.com/wp-content/uploads/2010/04/CR-3.jpg' },
      { name: 'Scone', price: 160.8, image: 'https://th.bing.com/th/id/R.0f23737645291e40817557f99f88cd3a?rik=MdUvf67r47orKw&riu=http%3a%2f%2fdialognews.ca%2fwp-content%2fuploads%2f2015%2f11%2fAdobeStock_50128896.jpeg&ehk=x9fRC9HRwUfcnaFyh7wdiLbXL%2fMGvnvTvOvfcCwhClw%3d&risl=&pid=ImgRaw&r=0' },
      { name: 'Brownie', price: 130.5, image: 'https://th.bing.com/th/id/OIP.8jfmKovNrBO1LfTGsS1MZwHaLH?rs=1&pid=ImgDetMain' },
      { name: 'Cheese Danish', price: 170.2, image: 'https://th.bing.com/th/id/OIP.lFAaKVkEqkqjS8m1UJ6mAQAAAA?rs=1&pid=ImgDetMain' },
      { name: 'Apple Pie', price: 220.4, image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Blackberry-Apple-Pie_EXPS_HBMZ18_4055_B07_11_8b-1.jpg' },
      { name: 'Lemon Tart', price: 240.6, image: 'https://www.sugarandsoul.co/wp-content/uploads/2021/06/lemon-tart-recipe-2.jpg' },
      { name: 'Eclair', price: 210.9, image: 'https://th.bing.com/th/id/OIP.cIbNcKcctlObx9QBM5GsdgHaE7?rs=1&pid=ImgDetMain' },
      { name: 'Churros', price: 180.3, image: 'https://natashaskitchen.com/wp-content/uploads/2020/03/Churros-Recipe-3.jpg' },
      { name: 'Madeleine', price: 160.5, image: 'https://rutgerbakt.nl/wp-content/uploads/2020/05/madeleines_recept-scaled.jpg' },
      { name: 'Peach Cobbler', price: 230.8, image: 'https://www.cookingclassy.com/wp-content/uploads/2018/04/peach-cobbler-14.jpg' },
     
     
    ],


    
    
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
