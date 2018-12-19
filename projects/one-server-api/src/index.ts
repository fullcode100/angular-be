import express, { Request, Response } from 'express';
import { OK } from 'http-status-codes';
import { logAppInfo, log } from './services/logger-service';

require('dotenv').config(); // tslint:disable-line

const PORT = process.env.PORT;
const app = express();

app
  .get('/health', (_: Request, res: Response) => res.sendStatus(OK))
  .get('/log', (_: Request, res: Response) => {
    log('Server connection works!', 'lightblue');
    res.send({ connection: true });
  })
  .set('port', PORT)
  .set('banner', 'One Server')
  .use(express.static(`${__dirname}/app/`))
  .listen(PORT, () => logAppInfo(app));
