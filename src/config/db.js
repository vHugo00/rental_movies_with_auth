import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
            'mongodb+srv://vv001226:i3gfxhB33!@users.ho0a8.mongodb.net/?retryWrites=true&w=majority&appName=Locadoras'
          );

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;