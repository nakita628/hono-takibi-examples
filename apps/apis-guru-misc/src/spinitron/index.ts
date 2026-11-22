import { OpenAPIHono } from '@hono/zod-openapi'
import { personaHandler, playlistHandler, showHandler, spinHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', personaHandler)
  .route('/', playlistHandler)
  .route('/', showHandler)
  .route('/', spinHandler)

export default app
