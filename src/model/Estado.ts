import {Entity, PrimaryGeneratedColumn, Column , OneToOne, OneToMany} from "typeorm";
import {Tramite} from './Tramite'

@Entity({name:'ESTADO'})
export class Estado {

    @PrimaryGeneratedColumn({name:"ESTADO_ID"})
    public id: number;

    @Column({name:"DESCRIPCION"})
    public descripcion: string;

    @Column({name:"OBSERVACION"})
    public observacion: string;

}