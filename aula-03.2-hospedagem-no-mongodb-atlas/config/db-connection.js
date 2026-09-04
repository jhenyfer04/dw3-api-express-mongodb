
import mongoose from "mongoose";

const dbUser = "fjhenyfer40_db_user";
const dbPassword = "2ejXhyCZUzFXkcVQ";
const connect = () => {
    mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@cluster0.naf9xmu.mongodb.net/api-thegames?appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("erro ao conectar com o mongoDB.");
    });
    connection.on("open", ()=> {
        console.log("conectando ao mongoDB com sucesso!");
    });
};
connect();
export default mongoose;