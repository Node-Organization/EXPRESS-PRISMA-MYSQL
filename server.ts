import express from 'express';
import { router } from './src/routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000, () => { console.log('SERVER START') });

//Após criar o schema.prisma execute o comando ( Mais detalhes na documentação )
//npx prisma generate --schema ./src/prisma/schema.prisma