import { NormalClass } from "src/normal_class/normal_class.entity"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    username: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @ManyToOne(() => NormalClass, normalClass => normalClass.idEstudiante)
    normalClass: NormalClass
}