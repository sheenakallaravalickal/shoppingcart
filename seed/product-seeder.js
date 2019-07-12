let dbconfig=require('../dbconfig/db-connect');

dbconfig.connect(function (error) {
    if (error){
        console.log('DB connection error');
        process.exit(1);
    } else {
        console.log('connected successfully');


dbconfig.get().collection('product').insertMany([{
    imagepath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title:'Gothic video Game',
    description:'Awesome Game!!!!!!!',
    price:'20'
},{
    imagepath:'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/fa/10/7c/fa107c00-d330-ce43-f581-74a8fc4a18be/AppIcon-0-1x_U007emarketing-0-85-220-7.png/246x0w.jpg',
    title:'Super Mario',
    description:'Below age 10',
    price:'10'
},{
    imagepath:'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Fortnite_Save_The_World.jpg/220px-Fortnite_Save_The_World.jpg',
    title:'Fort Nite',
    description:'fantastic game!!!!!!!',
    price:'30'
},{
    imagepath:'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/fa/10/7c/fa107c00-d330-ce43-f581-74a8fc4a18be/AppIcon-0-1x_U007emarketing-0-85-220-7.png/246x0w.jpg',
    title:'Super Mario',
    description:'Super Game!!!!',
    price:'10'
},{
    imagepath:'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Fortnite_Save_The_World.jpg/220px-Fortnite_Save_The_World.jpg',
    title:'Fort Nite',
    description:'fantastic game!!!!',
    price:'30'
},{
    imagepath:'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Gothiccover.png/220px-Gothiccover.png',
    title:'Gothic video Game',
    description:'super game!!!',
    price:'20'
}
])

    }

});