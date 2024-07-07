import mongoose, { version } from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true},
    data_criacao: { type: Date },
    quantidade_funcionarios: { type: Number }
}, {versionKey: false});

const editora = mongoose.model("editoras", editoraSchema);

export { editora, editoraSchema };