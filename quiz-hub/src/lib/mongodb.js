import React from 'react'
import mongoose from "mongoose"
export async function initMongodb() {
    if(mongoose.connection.readyState == 1){
        return mongoose.connection.asPromise();
    }
    return await mongoose.connect(process.env.MONGPDB_URL)
}
  