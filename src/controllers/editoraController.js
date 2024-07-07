import { editora } from "../models/editora.js";

class EditoraController {
    
    static async listarEditoras(req, res) {
        try{
            const listaEditoras = await editora.find({});
            res.status(200).json(listaEditoras);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request failed`});
        }

    };

    static async listarEditoraPorId(req, res) {
        try{
            const id = req.params.id;
            const editoraEncontrada = await editora.findById(id);
            res.status(200).json(editoraEncontrada);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of publisher failed`});
        }

    };

    static async cadastrarEditora(req, res) {
        try {
            const novaEditora = await editora.create(req.body)
            res.status(201).json({ message: "Publisher created", editora: novaEditora });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Register publisher failed `});
        }
    };

    static async atualizarEditora(req, res) {
        try{
            const id = req.params.id;
            await editora.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Publisher updated"});
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of update failed`});
        }

    };

    static async excluirEditora(req, res) {
        try{
            const id = req.params.id;
            await editora.findByIdAndDelete(id);
            res.status(200).json({ message: "Publisher deleted"});
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of delete failed`});
        }
    };
};

export default EditoraController;