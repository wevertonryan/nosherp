import { DataSource } from "typeorm";
import { ProductIngredients, ProductModel } from "./model";
import { AppDataSource } from "../data-source";

const productRepository = AppDataSource.getRepository(ProductModel)

export class ProductService 
{
    public async getAll(): Promise<ProductModel[]> {
        let produtos = await productRepository.find({
            relations: {
                ingredients: true
            }
        });
        return produtos;
    }

    public async create(name: string, price: number, description: string, ingredients: ProductIngredients[]): Promise<ProductModel> 
    {
        const product = productRepository.create({name, price, description, ingredients})
        return await productRepository.save(product)
    }
}