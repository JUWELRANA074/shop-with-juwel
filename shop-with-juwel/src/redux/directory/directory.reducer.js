const INITIAL_STATE = {
     sections :[
          {
          title :'Hats',
          imageUrl:'https://dyn1.heritagestatic.com/lf?set=path%5B1%2F3%2F3%2F4%2F4%2F13344211%5D&call=url%5Bfile%3Aproduct.chain%5D',
          id: 1,
          linkUrl:'shop/hats'
                         },
          {
               title :'Jackets',
          imageUrl:'https://images.freekaamaal.com/post_images/1543903434.PNG',
          id: 2,
          linkUrl:'shop/jackets'
          }  ,
          {
               title : 'sneakers',
          imageUrl:'https://image.shutterstock.com/image-illustration/mens-fashion-shoes-black-classic-260nw-1080406805.jpg',
          id: 3,
          linkUrl:'shop/sneakers'
          }   ,  
          {
               title :'Woman',
          imageUrl:'https://www.pngfind.com/pngs/m/161-1612489_corporate-woman-png-business-woman-png-transparent-png.png',
          size:'large',
          id: 4,
          linkUrl:'shop/womans'
          }    , 
          {
               title :'Man',
          imageUrl:'https://www.themepress.com.au/wp-content/uploads/person2.png',
          size:'large',
          id: 5,
          linkUrl:'shop/mens'
          } 
     ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          default:
               return state;
     }
};

export default directoryReducer;
