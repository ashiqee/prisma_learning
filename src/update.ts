import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const updates = async()=>{


//     const singleUpdate =await prisma.post.update({
//         where:{
//             id:7
//         },
//         data:{
//             title:"Title 7",
//             // content:"Content 4",
//             // authorName:"Author 444"
//         }
//     })

// console.log("updates");


const updateMany = await prisma.post.updateMany({
    where:{
        title:"Title 2"
    },
    data:{
        published:true
    }
})



};


updates()