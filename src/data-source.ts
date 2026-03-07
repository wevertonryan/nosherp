import "reflect-metadata"
import { DataSource } from "typeorm"
import { ProductIngredients, ProductModel } from "./product/model"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "nosherp.sqlite",
    synchronize: true,
    logging: false,
    entities: [ProductModel, ProductIngredients],
    migrations: [],
    subscribers: [],
})