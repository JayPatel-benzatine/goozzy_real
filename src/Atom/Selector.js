import { selector } from "recoil";
import axios from "axios";

const url1 = `http://ecommerceapi.benzatine.com/public/api/special_product`;
const fetchUserData = selector({
  key: "fetchUserData",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url1);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
});

const url2 = `http://ecommerceapi.benzatine.com/public/api/category`;
const categoreyLists = selector({
  key: "categoreyLists",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url2);
      return response.data.data;
      
    } catch (error) {
      throw error;
    }
  }
});

const url3 = `http://ecommerceapi.benzatine.com/public/api/offer`;
const TrendOfferLists = selector({
  key: "TrendOfferLists",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url3);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
});

const url4 = `http://ecommerceapi.benzatine.com/public/api/slider`;
const SliderLists= selector({
  key: "SliderLists",
  get: async ({ get }) => {
    try {
      const response = await axios.get(url4);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
});

// // const url5 = `http://ecommerceapi.benzatine.com/public/api/category_list/5`;
// const CategoryLists= selector({
//   key: "CategoryLists",
//   get: async ({ get }) => {
//     const categor = get(CategoryList);
//     const id =categor.id;
//     try {
//       const response = await axios.get(`http://ecommerceapi.benzatine.com/public/api/category_list/${id}`);
//       return response.data.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// });

export {fetchUserData,categoreyLists,TrendOfferLists,SliderLists};
