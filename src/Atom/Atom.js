import { atom } from 'recoil'

const specialProduct = atom({
    key: 'specialProduct',
    default: []
});

const filterProduct = atom({
    key: 'filterProduct',
    default: []
});
const categoreyList = atom({
    key: 'categoreyList',
    default: []
});
const TrendOfferList = atom({
    key: 'TrendOfferList',
    default: [],
});
const SliderList = atom({
    key: 'SliderList',
    default: [],
});
const FilterProductList = atom({
    key: 'FilterProductList',
    default: [],
});
const OriginalPrice = atom({
    key: 'OriginalPrice',
    default: [],
});

const headerList = atom({
    key: 'headerList',
    default: {
        priceRang1: '0',
        priceRang2: '5000',
    }
});

export { specialProduct, filterProduct, categoreyList, 
    TrendOfferList, SliderList, FilterProductList, headerList,OriginalPrice };