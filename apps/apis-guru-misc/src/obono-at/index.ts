import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authHandler,
  belegHandler,
  exportHandler,
  monatsbelegeHandler,
  registrierkasseHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', belegHandler)
  .route('/', exportHandler)
  .route('/', registrierkasseHandler)
  .route('/', monatsbelegeHandler)

export default app
