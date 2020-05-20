import {Entity, PrimaryGeneratedColumn, Column , OneToOne, OneToMany, JoinColumn} from "typeorm";
import {Tramite} from './Tramite'
import {Estado} from './Estado'

@Entity({name:'VALIDACION_ABM'})
export class ValidacionABM {

    @PrimaryGeneratedColumn({name:"VALIDACION_ABM_ID"})
    public id: number;

    @Column({name:"FAMILIARES"})
    public familiares: string;

    @Column({name:"OBSERVACIONES"})
    public observaciones: string;
    
    @OneToOne(type => Tramite)
    @JoinColumn({name : 'ID_TRAMITE'})
    tramite: Tramite;

    @OneToOne(type => Estado)
    @JoinColumn({name : 'ID_ESTADO'})
    estado : Estado;


}


