import { serverHttp } from "./app";


serverHttp.listen(4000, () => {
    console.log(`🚀  Server is runing on PORT 4000`);
});