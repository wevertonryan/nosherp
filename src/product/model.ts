import { UUID } from "node:crypto"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from "typeorm"

@Entity()
export class ProductModel {

    @PrimaryGeneratedColumn("uuid")
    id!: string

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

    @Column()
    name!: string

    @Column()
    price!: number

    @Column()
    description?: string

    @OneToMany(() => ProductIngredients, ingredient => ingredient.product, { cascade: true })
    ingredients!: ProductIngredients[]

    constructor(name: string, price: number, description?: string) 
    {
        this.name = name;
        this.price = price;
        this.description = description;
        
    }
}

@Entity()
export class ProductIngredients {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column()
    name!: string

    @Column()
    quantity!: number

    @ManyToOne(() => ProductModel, product => product.ingredients)
    product!: ProductModel
}