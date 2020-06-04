import {Entity, PrimaryGeneratedColumn, Column , OneToMany} from "typeorm";
import {Tramite} from './Tramite'

@Entity({name:'EJECUTIVO_VENTA'})
export class Ejecutivo {

    @PrimaryGeneratedColumn({name:"EJECUTIVO_VENTA_ID"})
    public id: number;

    @Column({name:"APELLIDO"})
    public apellido: string;

    @Column({name:"NOMBRE"})
    public nombre: string;

    @Column({name:"CUIL"})
    public cuil: string;

    @Column({name:"EMAIL"})
    public email: string;

    @Column({name:"PASS"})
    public pass: string;

    @Column({name:"RED"})
    public red: string;

    @Column({name:"ZONA_FILIAL"})
    public zonaFilial: string;

    @Column({name: "SEXO"})
    public sexo: string;

    @Column({name: 'ACTIVO'})
    public activo: number;

    @OneToMany(type => Tramite, tramite => tramite.executive)
    tramite: Tramite[];


}