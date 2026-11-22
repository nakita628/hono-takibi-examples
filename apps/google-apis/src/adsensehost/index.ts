import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  adclientsHandler,
  associationsessionsHandler,
  customchannelsHandler,
  reportsHandler,
  urlchannelsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', adclientsHandler)
  .route('/', customchannelsHandler)
  .route('/', urlchannelsHandler)
  .route('/', associationsessionsHandler)
  .route('/', reportsHandler)

export default app
