import expressApp from './expressApp.ts'
const PORT = process.env.PORT || 5050;

export const StartServer = async () => {
    expressApp.listen(PORT, () => {
        console.log("Listening to: ", PORT);
    });

    process.on("uncaughtException", async (err) => {
        console.log(err);
        process.exit(1);
        
    })
};

StartServer().then(() => {
    console.log("server is up");
}
); 