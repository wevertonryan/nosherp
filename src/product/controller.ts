import express, { Request, Response, NextFunction } from 'express';
import { ProductService } from "./service";

const service = new ProductService();

export async function createProduct(req: Request, res: Response){
    const {name, price, description, ingredients} = req.body || {};

    if (!name || !price)
    {
        return res.json({message: "por favor, preencha tudo"})
    }

    if (!Array.isArray(ingredients) || ingredients.length === 0)
    {
        return res.json({message: "por favor, indique os ingredientes"})
    }

    await service.create(name, price, description, ingredients);
    return res.json({message: "criado com sucesso"});
}

export async function getProduct(req: Request, res: Response){
    let products = await service.getAll();
    return res.json(products);
}