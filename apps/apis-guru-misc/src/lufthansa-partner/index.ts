import { OpenAPIHono } from '@hono/zod-openapi'
import {
  baggageHandler,
  offersHandler,
  ordersHandler,
  preflightHandler,
  promotionsHandler,
  referenceDataHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', baggageHandler)
  .route('/', offersHandler)
  .route('/', ordersHandler)
  .route('/', preflightHandler)
  .route('/', promotionsHandler)
  .route('/', referenceDataHandler)

export default app
