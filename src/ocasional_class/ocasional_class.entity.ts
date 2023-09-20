import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class OcasionalClass {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column("int", { array: true })
    idEstudiantes: number[]
}