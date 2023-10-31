import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export enum ocasiaoEspecial {
    NIVER = 'Aniversário',
    CASAMENTO = 'Pedido de casamento',
    EVENTOS = 'Eventos corporativos',
    ENCONTROS = 'Encontros românticos',
    FORMAR = 'Formaturas'
}

@Entity('reserva')
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'nm_completo' })
  nomeCompleto: string

  @Column({ name: 'dt_hr' })
  dataHora: Date

  @Column({ name: 'número_pessoas' })
  numeroPessoas: number

  @Column({ unique: true })
  whatsapp: string

  @Column({ name: 'ocasiao_especial' })
  ocasiaoEspecial: string
}
