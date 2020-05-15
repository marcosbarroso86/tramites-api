import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'TRAMITE'})
export class Tramite {

    @PrimaryGeneratedColumn({name:"TRAMITE_ID"})
    public id: number;

    @Column({name:"CUIL"})
    public cuil: string;

    @Column({name:"CUIT"})
    public cuit: string;
    
    @Column({name:"FECHA_INICIO"})
    public fecha_inicio: string;//CAMBIAR EL TIPO DE DATO

    @Column({name : 'EMAIL'})
    public email: string;       

    @Column({name : 'PASS'})
    public pass: string;   

    @Column({name : 'RED'})
    public red: string;   

    @Column({name : 'ZONA_FILIAL'})
    public zona_filial: string;   

    @Column({name : 'OBSERVACION'})
    public observacion: string;   

    @Column({name : 'ID_EJECUTIVO_VENTA'})
    public id_ejecutivo_venta: number;   


}
