import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn  } from "typeorm";
import {Tramite} from './Tramite'

@Entity({name:'FORMULARIO'})
export class Formulario {

    @PrimaryGeneratedColumn({name:"FORMULARIO_ID"})
    public id: number;

    @Column({name:"TIPO"})
    public tipo: string;

    @Column({name:"FECHA_CREACION"})
    public fechaCreacion: Date;

    @Column({name:"DESCRIPCION"})
    public descripcion: string;

    @Column({name:"VOLUMEN"})
    public volumen: string;

    @Column({name:"UBICACION"})
    public ubicacion: string;

    @ManyToOne(type => Tramite, tramite => tramite.form)
    @JoinColumn({name: "ID_TRAMITE"}) 
    tramite : Tramite;
}