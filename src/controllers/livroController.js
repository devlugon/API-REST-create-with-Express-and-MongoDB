import livro from "../models/livro.js";

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
        try {
            const novoLivro = await livro.create(req.body)
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
};

export default LivroController;