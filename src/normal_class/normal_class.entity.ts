import { Users } from "src/users/user.entity"
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"

@Entity()
export class NormalClass {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column("int", { array: true })
    idEstudiantes: number[]

    @OneToMany(() => Users, users => users.normalClass)
    idEstudiante: Users[]
}