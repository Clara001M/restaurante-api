import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column({ unique: true })
  senha: string

  @Column({ unique: true })
  Confirmarsenha: string
}