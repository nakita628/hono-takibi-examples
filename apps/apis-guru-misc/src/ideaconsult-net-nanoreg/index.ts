import { OpenAPIHono } from '@hono/zod-openapi'
import { searchHandler, structuresHandler, studiesHandler, substancesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', studiesHandler)
  .route('/', structuresHandler)
  .route('/', substancesHandler)
  .route('/', searchHandler)

export default app
