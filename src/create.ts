import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const main = async()=>{

//   const result = await prisma.post.create({
//     data:{
//         title:"This is a title 2",
//         content:"This is content 2",
//         authorName:"Ashiqee"
//     }
//   })
    
//   console.log(result);

// create many 
const createMany = await prisma.post.createMany({
    data:[
        {
            title:"Title 1",
            content:"Content 1",
            authorName:"Author one"
        },
        {
            title:"Title 2",
            content:"Content 2",
            authorName:"Author 2"
        },
        {
            title:"Title 3",
            content:"Content 3",
            authorName:"Author 3"
        },
        {
            title:"Title 4",
            content:"Content 4",
            authorName:"Author 4"
        },
    ]
})

console.log(createMany);


}


main();