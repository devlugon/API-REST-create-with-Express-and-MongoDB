import mongoose from "mongoose";
import { autorSchema } from "./autor.js";
import { editoraSchema } from "./editora.js";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: editoraSchema },
    preco: { type: Number },
    paginas :{ type: Number},
    autor: { type: autorSchema }
},{ versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;