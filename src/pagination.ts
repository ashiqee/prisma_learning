import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


const  paginationSorting = async()=>{
    //offset data
    const offsetData = await prisma.post.findMany({
        skip:2,
        take:2
    })

    // console.log({offsetData});

    //cursor based pagination
    const cursorData = await prisma.post.findMany({
        skip:2,
        take:2,
        cursor:{
            id:1
        }
    })

    console.log({cursorData});
    
}



paginationSorting()