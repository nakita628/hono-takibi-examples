import { OpenAPIHono } from '@hono/zod-openapi'
import {
  nearMissesHandler,
  recordingsHandler,
  requestsHandler,
  scenariosHandler,
  stubMappingsHandler,
  systemHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', stubMappingsHandler)
  .route('/', nearMissesHandler)
  .route('/', recordingsHandler)
  .route('/', requestsHandler)
  .route('/', systemHandler)
  .route('/', scenariosHandler)

export default app
