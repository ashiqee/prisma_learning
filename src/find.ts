import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const main = async()=>{

// get all data 
const getAllFromDB= await prisma.post.findMany();

//find first and find first aor throw error
const findFirst = await prisma.post.findFirstOrThrow({
    where:{
        published:false
    }
})

// find unique and find unique or throw error
const findUnique = await prisma.post.findUniqueOrThrow({
    where:{
        id:1
    }
})


console.log({findUnique});


}


main();