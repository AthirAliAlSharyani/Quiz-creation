import { initMongodb } from "../../../lib/mongodb"
import Questions from "../../models/questions";

export default async function handle(rrq,res){
    await initMongodb();
    res.json(await Questions.find().exec)
} 