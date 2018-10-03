var initialState = [
    {
        id : 1,
        name : 'Iphone X',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/12/8/636483219613202713_1.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 999,
        inventory : 10,
        rating: 5
    },
    {
        id : 2,
        name : 'Samsung galaxy Note 9',
        image : 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/8/20/636703736254010068_note9-den-1.jpg',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 1000,
        inventory : 20,
        rating : 4
    },
    {
        id : 3,
        name : 'Samsung galaxy S8 plus',
        image : 'https://www.csmobiles.com/WebRoot/StoreES3/Shops/78317249/5931/1972/9A2F/D6AD/0242/C0A8/2BBA/FC00/samsung_galaxy_s8_ml.jpg',
        description : 'Sản phẩm do Samsung sản xuất',
        price : 899,
        inventory : 15,
        rating : 3
    }
];

const products = ( state = initialState, action) =>{
    switch(action.type){
        default : return [...state];
    }
}

export default products;