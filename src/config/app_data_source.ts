import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './database.sqlite',
  entities: ['./src/models/*.{ts,js}'],
  synchronize: true

})
