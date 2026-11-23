import { OpenAPIHono } from '@hono/zod-openapi'
import { personasHandler, playlistsHandler, showsHandler, spinsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', personasHandler)
  .route('/', playlistsHandler)
  .route('/', showsHandler)
  .route('/', spinsHandler)

export default app
