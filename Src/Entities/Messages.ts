import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("messages")
export default class Message {
    @PrimaryGeneratedColumn("uuid")
    readonly id : string;

    @Column()
    email: string;

    @Column()
    message : string;

    @CreateDateColumn()
    created_at : Date;

}