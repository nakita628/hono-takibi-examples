import { OpenAPIHono } from '@hono/zod-openapi'
import { cargoHandler, offersHandler, operationsHandler, referencesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cargoHandler)
  .route('/', offersHandler)
  .route('/', operationsHandler)
  .route('/', referencesHandler)

export default app
