import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('pessoas')
export class Usuario {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    apelido: string

  @Column({ unique: true })
    email: string

  @Column({ unique: true })
 senha: string
}
