import { autor } from "../models/autor.js";

class AutorController {
    
    static async listarAutores(req, res) {
        try{
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request failed`});
        }

    };

    static async listarAutorPorId(req, res) {
        try{
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of author failed`});
        }

    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: "Author created", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Register author failed `});
        }
    };

    static async atualizarAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Author updated"});
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of update failed`});
        }

    };

    static async excluirAutor(req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Author deleted"});
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of delete failed`});
        }
    };
};

export default AutorController;