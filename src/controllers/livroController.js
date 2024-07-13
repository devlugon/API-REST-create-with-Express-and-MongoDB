import livro from "../models/livro.js";
import { autor } from "../models/autor.js";
import { editora } from "../models/editora.js";

class LivroController {
    
    static async listarLivros(req, res) {
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request failed`});
        }

    };

    static async listarLivroPorId(req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of book failed`});
        }

    };

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Book created", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Register book failed `});
        }
    };

    static async atualizarLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Book updated"});
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of update failed`});
        }

    };

    static async excluirLivro(req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Book deleted"});
        } catch (erro){
            res.status(500).json({ message: `${erro.message} - Request of delete failed`});
        }
    };

    static async listarLivrosPorEditora (req, res) {
        const publisher = req.query.editora;
        try {
            const editoraEncontrada = await editora.findOne( { nome: publisher } );

            if (!editoraEncontrada) {
                return res.status(404).json({ message: 'Editora não encontrada.' });
            }

            const livrosPorEditora = await livro.find({ 'editora.nome': editoraEncontrada.nome });
            res.status(200).json(livrosPorEditora);
        } catch(erro) {
            res.status(500).json({ message: `${erro.message} - Search failed`});
        }
    }

};

export default LivroController;