import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
            `${process.env.MONGODB}`
          );

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;