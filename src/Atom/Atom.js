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
    default: []
});
const SliderList = atom({
    key: 'SliderList',
    default: []
});


export { specialProduct,filterProduct,categoreyList,TrendOfferList,SliderList };