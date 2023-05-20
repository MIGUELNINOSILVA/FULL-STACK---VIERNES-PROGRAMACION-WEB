import app from "./app.js";

const main = () => {
    app.listen(app.set("port"));
    console.log(
        `Hey men, you are good server, is runing on port ${app.set("port")} \n hola mundo está todo bien`
    );
}

main();