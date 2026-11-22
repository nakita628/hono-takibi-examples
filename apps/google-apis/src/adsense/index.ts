import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  adclientsHandler,
  adunitsHandler,
  alertsHandler,
  customchannelsHandler,
  metadataHandler,
  paymentsHandler,
  reportsHandler,
  savedadstylesHandler,
  urlchannelsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', adclientsHandler)
  .route('/', adunitsHandler)
  .route('/', customchannelsHandler)
  .route('/', urlchannelsHandler)
  .route('/', alertsHandler)
  .route('/', metadataHandler)
  .route('/', paymentsHandler)
  .route('/', reportsHandler)
  .route('/', savedadstylesHandler)

export default app
