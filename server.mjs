import { createServer } from 'http';

const server = createServer();
server.listen(8080, () => {
    console.log(`Sever listening to http://localhost:${server.addres().port()}`);
});