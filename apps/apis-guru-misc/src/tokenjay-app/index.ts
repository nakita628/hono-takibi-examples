import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ageusdHandler,
  cancelbabelHandler,
  createbabelHandler,
  mosaikHandler,
  paymentHandler,
  peersHandler,
  sigrsvHandler,
  sigusdHandler,
  tokensHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ageusdHandler)
  .route('/', cancelbabelHandler)
  .route('/', createbabelHandler)
  .route('/', mosaikHandler)
  .route('/', paymentHandler)
  .route('/', peersHandler)
  .route('/', sigrsvHandler)
  .route('/', sigusdHandler)
  .route('/', tokensHandler)

export default app
