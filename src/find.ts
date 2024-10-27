import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const main = async()=>{

// get all data 
const getAllFromDB= await prisma.post.findMany({
    select:{
        authorName:true
    }
});

//find first and find first aor throw error
const findFirst = await prisma.post.findFirstOrThrow({
    where:{
        published:false
    }
})

// find unique and find unique or throw error
const findUnique = await prisma.post.findUniqueOrThrow({
    where:{
        id:12
    },
    select:{
        title:true,
        content:true,
        authorName:true,
    }
})


console.log({getAllFromDB});


}


main();