import { Request, Response } from "express"
import path from 'path';
import fs from 'fs-extra'

import Photo from '../models/Photo'

export async function getPhotos(req:Request, res: Response): Promise<Response> {
    const photos = await Photo.find()
    return res.json(photos)
}

export async function getPhoto(req:Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const photo = await Photo.findById(id)
    return res.json(photo);
}

//Funcion para guardar Photo
export async function createPhoto(req:Request, res: Response): Promise<Response> {
    
    const {title, description} = req.body;
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file?.path
    };
    //Creamos una nueva foto con new Photo
    const photo = new Photo(newPhoto);
    
    //Guardamos la Imagen en la base de datos con la funcion .save()
    await photo.save()
    return res.json({
        message: 'Photo successfully saved',
        photo
    })
}

export async function deletePhoto(req:Request, res: Response) : Promise<Response> {
    const {id} = req.params
    const photo = await Photo.findByIdAndRemove(id)
    if(photo) {
        await fs.unlink(path.resolve(photo.imagePath))
    }
    return res.json({
        message: 'Photo Removed',
        photo
    })
}

export async function updatePhoto(req:Request, res: Response) : Promise<Response> {
    const {id} = req.params;
    const {title, description} = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    })
    return res.json({
        message: 'Updated Photo',
        updatedPhoto
    })
}

