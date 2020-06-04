import {Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn} from "typeorm";
import {Tramite} from './Tramite'
import {Estado} from './Estado'

@Entity({name:'VALIDACION_COMERCIAL'})
export class ValidacionComercial {

    @PrimaryGeneratedColumn({name:"VALIDACION_COMERCIAL_ID"})
    public id: number;

    @Column({name:"CUIL"})
    public cuil: number;

    @Column({name:"CUIT"})
    public cuit: number;
    
    @Column({name:"ANSES"})
    public anses: number;//CAMBIAR EL TIPO DE DATO

    @Column({name:"SUPERINTENDENCIA"})
    public superintendence: number;//CAMBIAR EL TIPO DE DATO

    @Column({name : 'FORMULARIO_COMPLETO'})
    public completeForm: number;       

    @Column({name : 'REINGRESO_CONSUMOS'})
    public consumptionReentry: number;   

    @Column({name : 'ACTIVO'})
    public active: number;   


    @OneToOne(type => Tramite)
    @JoinColumn({name : 'ID_TRAMITE'})
    tramite: Tramite;

    @OneToOne(type => Estado)
    @JoinColumn({name : 'ID_ESTADO'})
    estado : Estado;    


}
