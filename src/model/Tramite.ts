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
    fechaInicio: Date;

    @Column({name : 'EMAIL'})
    public email: string;       

    @Column({name : 'PASS'})
    public pass: string;   

    @Column({name : 'RED'})
    public red: string;   

    @Column({name : 'ZONA_FILIAL'})
    public zonaFilial: string;   

    @Column({name : 'OBSERVACION'})
    public observacion: string;   

    @ManyToOne(type => Ejecutivo, ejecutivo => ejecutivo.tramite)
    @JoinColumn({name: "ID_EJECUTIVO_VENTA"}) 
    ejecutivo : Ejecutivo;

    @OneToMany(type => Formulario, formulario => formulario.tramite)
    formulario: Formulario[];

}
