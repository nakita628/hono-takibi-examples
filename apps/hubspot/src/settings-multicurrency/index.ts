import { OpenAPIHono } from '@hono/zod-openapi'
import { basicHandler, batchHandler, centralFXRatesHandler, exchangeRatesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', centralFXRatesHandler)
  .route('/', basicHandler)
  .route('/', exchangeRatesHandler)
  .route('/', batchHandler)

export default app
