import { OpenAPIHono } from '@hono/zod-openapi'
import {
  berriesHandler,
  contestsHandler,
  encountersHandler,
  evolutionHandler,
  gamesHandler,
  itemsHandler,
  locationHandler,
  machinesHandler,
  movesHandler,
  pokemonHandler,
  utilityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', utilityHandler)
  .route('/', pokemonHandler)
  .route('/', berriesHandler)
  .route('/', contestsHandler)
  .route('/', encountersHandler)
  .route('/', evolutionHandler)
  .route('/', gamesHandler)
  .route('/', itemsHandler)
  .route('/', locationHandler)
  .route('/', machinesHandler)
  .route('/', movesHandler)

export default app
