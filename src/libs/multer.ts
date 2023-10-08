import multer from 'multer';
import uuid, { v4 } from 'uuid';
import path from 'path';

//Nos permite decirle en donde queremos que guarden la IMG
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        //Esta funcion servira para cambiarle el nombre al archivo
        cb(null, v4() + path.extname(file.originalname))
    }
});

export default multer({storage});

