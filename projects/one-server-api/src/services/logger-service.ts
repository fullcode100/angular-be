import chalk from 'chalk';
import { Express } from 'express';
import figlet from 'figlet';

export const log = (text: string, color = process.env.LOG_COLOR) => console.log(chalk.keyword(color as string)(text));

export const logAppInfo = (app: Express) => log(`\n${figlet.textSync(app.get('banner'))}
  Url: ${chalk.blue.underline.bold(`http://localhost:${app.get('port')}`)}
  Mode: ${chalk.bold(app.get('env'))}`);
