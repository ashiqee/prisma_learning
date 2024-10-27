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
  

// get data 
const getAllFromDB= await prisma.post.findMany();

console.log(getAllFromDB);


}


main();