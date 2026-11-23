import { OpenAPIHono } from '@hono/zod-openapi'
import {
  companiesHandler,
  meHandler,
  merchantsHandler,
  storesHandler,
  terminalsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', companiesHandler)
  .route('/', meHandler)
  .route('/', merchantsHandler)
  .route('/', storesHandler)
  .route('/', terminalsHandler)

export default app
