import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  adclientsHandler,
  associationsessionsHandler,
  reportsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountsHandler)
  .route('/', adclientsHandler)
  .route('/', associationsessionsHandler)
  .route('/', reportsHandler)

export default app
