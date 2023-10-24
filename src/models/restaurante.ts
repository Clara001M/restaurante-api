import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('restaurantes')
export class Restaurante{
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'Nome_completo' })
  nomeCompleto: string

  @Column({ unique: true })
  cnpj: string

  @Column({ unique: true })
  email: string

  @Column({ name: 'Contato' })
  contato: string

  @Column({ name: 'Endereco' })
  logradouro: string
  bairro: string
  cidade: string
  cep: string
}

