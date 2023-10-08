import { Router } from "express";
import { getPhotos, createPhoto, getPhoto, deletePhoto, updatePhoto } from "../controllers/photo.controller"; 
import multer from '../libs/multer'

const router = Router();

router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto) //multer.single nos permite subir un solo archivo

router.route('/photos/:id')
    .get(getPhoto)
    .delete(deletePhoto) 
    .put(updatePhoto)   

export default router;