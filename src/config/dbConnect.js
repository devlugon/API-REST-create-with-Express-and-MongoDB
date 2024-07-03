import mongoose, { mongo } from "mongoose";

async function databaseConnection(){

    mongoose.connect("mongodb+srv://admin:admin123@cluster0.j0ttsns.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
};

export default databaseConnection;
