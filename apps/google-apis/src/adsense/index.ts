import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  adclientsHandler,
  alertsHandler,
  metadataHandler,
  paymentsHandler,
  reportsHandler,
  savedadstylesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', adclientsHandler)
  .route('/', alertsHandler)
  .route('/', metadataHandler)
  .route('/', paymentsHandler)
  .route('/', reportsHandler)
  .route('/', savedadstylesHandler)

export default app
