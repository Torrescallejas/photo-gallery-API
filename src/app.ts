import express from 'express';
import morgan from 'morgan';
import path from 'path';
import indexRouter from './routes/index';
import cors from 'cors'

const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api', indexRouter);

// This folder will be use to store public files
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;