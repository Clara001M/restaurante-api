import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('restaurante')
export class Restaurante{
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'nome' })
  nomeCompleto: string

  @Column({ unique: true })
  cnpj: string

  @Column({ unique: true })
  email: string

  @Column({ name: 'senha' })
  senha: string

  @Column({ name: 'contato' })
  contato: string

  @Column({ name: 'endereco' })
  logradouro: string

  @Column({ name: 'bairro' })
  bairro: string

  @Column({ name: 'cidade' })
  cidade: string
}

