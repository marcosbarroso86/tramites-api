import {Entity, PrimaryGeneratedColumn, Column , OneToOne, JoinColumn} from "typeorm";
import {Tramite} from './Tramite'
import {Estado} from './Estado'

@Entity({name:'VALIDACION_COMERCIAL'})
export class ValidacionComercial {

    @PrimaryGeneratedColumn({name:"VALIDACION_COMERCIAL_ID"})
    public id: number;

    @Column({name:"CUIL"})
    public cuil: boolean;

    @Column({name:"CUIT"})
    public cuit: boolean;
    
    @Column({name:"SUPERINTENDENCIA"})
    public superintendencia: boolean;//CAMBIAR EL TIPO DE DATO

    @Column({name : 'FORMULARIO_COMPLETO'})
    public formulario_completo: boolean;       

    @Column({name : 'REINGRESO_CONSUMOS'})
    public reingreso_consumos: boolean;   

    @OneToOne(type => Tramite)
    @JoinColumn({name : 'ID_TRAMITE'})
    tramite: Tramite;

    @OneToOne(type => Estado)
    @JoinColumn({name : 'ID_ESTADO'})
    estado : Estado;    


}
