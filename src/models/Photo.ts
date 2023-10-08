import { Schema, model, Document } from "mongoose";

//Se trabaja con Mongoose
//Se crea un schema, o mas bien la info que se guardara con la foto
const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
})

//Se trabaja con TypeScript
interface IPhoto extends Document {
    title: string,
    description: string,
    imagePath: string
}

//Se crea un modelo/coleccion a partir del schema 
export default model<IPhoto>('Photo', schema);