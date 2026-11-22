import { OpenAPIHono } from '@hono/zod-openapi'
import {
  creatorRolesHandler,
  creatorsHandler,
  developersHandler,
  gamesHandler,
  genresHandler,
  platformsHandler,
  publishersHandler,
  storesHandler,
  tagsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', creatorRolesHandler)
  .route('/', creatorsHandler)
  .route('/', developersHandler)
  .route('/', gamesHandler)
  .route('/', genresHandler)
  .route('/', platformsHandler)
  .route('/', publishersHandler)
  .route('/', storesHandler)
  .route('/', tagsHandler)

export default app
