import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import {Ejecutivo} from './Ejecutivo';
import {Formulario} from './Formulario'
@Entity({name:'TRAMITE'})
export class Tramite {

    @PrimaryGeneratedColumn({name:"TRAMITE_ID"})
    public id: number;

    @Column({name:"CUIL"})
    public cuil: string;

    @Column({name:"CUIT"})
    public cuit: string;
    
    @Column({name:"FECHA_INICIO"})
    creationDate: Date;

    @Column({name:"SEXO"})
    public gender: string;

    @Column({name:"ANALISTA_COMERCIAL_COD"})
    public analistaComercialCod: string;

    @Column({name:"ANALISTA_ABM_COD"})
    public analistaAbmCod: string;

    @ManyToOne(type => Ejecutivo, ejecutivo => ejecutivo.tramite)
    @JoinColumn({name: "ID_EJECUTIVO_VENTA"}) 
    executive : Ejecutivo;

    @OneToMany(type => Formulario, formulario => formulario.tramite)
    form: Formulario[];

}
