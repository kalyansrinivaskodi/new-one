
import express from "express";
const app=express();
const users=[
    {
     "createdAt": "2021-07-27T11:04:15.114Z",
     "name": "Meghan Legros",
     "avatar": "https://cdn.fakercloud.com/avatars/wearesavas_128.jpg",
     "id": "1"
    },
    {
     "createdAt": "2021-07-27T21:48:09.672Z",
     "name": "Amanda Gerhold",
     "avatar": "https://cdn.fakercloud.com/avatars/wegotvices_128.jpg",
     "id": "2"
    },
    {
     "createdAt": "2021-07-27T08:09:13.498Z",
     "name": "Woodrow Hamill PhD",
     "avatar": "https://cdn.fakercloud.com/avatars/craigelimeliah_128.jpg",
     "id": "3"
    },
    {
     "createdAt": "2021-07-27T16:05:15.447Z",
     "name": "Benny Erdman",
     "avatar": "https://cdn.fakercloud.com/avatars/salvafc_128.jpg",
     "id": "4"
    },
    {
     "createdAt": "2021-07-27T07:50:39.946Z",
     "name": "Anna Gibson",
     "avatar": "https://cdn.fakercloud.com/avatars/jennyshen_128.jpg",
     "id": "5"
    },
    {
     "createdAt": "2021-07-27T22:51:18.247Z",
     "name": "Lynn Borer",
     "avatar": "https://cdn.fakercloud.com/avatars/jeremymouton_128.jpg",
     "id": "6"
    },
    {
     "createdAt": "2021-07-27T10:11:03.855Z",
     "name": "Penny Medhurst",
     "avatar": "https://cdn.fakercloud.com/avatars/oskamaya_128.jpg",
     "id": "7"
    },
    {
     "createdAt": "2021-08-31T06:52:13.516Z",
     "name": "Timothy Boehm",
     "avatar": "https://cdn.fakercloud.com/avatars/the_winslet_128.jpg",
     "id": "8"
    }
   ];
//connection to db
const url="mongodb://localhost/flipkart"

app.use(express.json());//middle ware -all the body is passed as a json
app.get("/",(request,response)=>{
    response.send("hello !!!");
});


app.get("/users",(request,response)=>{
    response.send(users);
});

app.post("/user",(request,response)=>{
    console.log(request.body);
   response.send({msg:"created a user"});
});



app.get("/users/:id",(request,response)=>{
    const {id}=request.params;
    const notFound={msg:"user not found"};
    const searchedUser=users.filter(user=>user.id===id);

    if(searchedUser.length>0){
        response.send(searchedUser);
    }
    else{
        response.send(notFound);
    }
    console.log("Requesting for the userid:",id);
});


app.listen(4000,()=>console.log("The server is started"));