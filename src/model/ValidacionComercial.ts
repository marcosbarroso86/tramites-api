import {Entity, PrimaryGeneratedColumn, Column , OneToOne, OneToMany} from "typeorm";
import {Tramite} from './Tramite'

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

    @Column({name : 'ID_ESTADO'})
    public estado: number;      

    // @OneToMany((type) => Estado, estado => estado.id)
    // estado : Estado;

    // @OneToOne((type) => Tramite, tramite => tramite.id)
    // tramite : Tramite;
}


