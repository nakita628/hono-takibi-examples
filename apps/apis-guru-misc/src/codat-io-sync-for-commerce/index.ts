import { OpenAPIHono } from '@hono/zod-openapi'
import {
  clientsHandler,
  companiesHandler,
  configHandler,
  metaHandler,
  syncHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clientsHandler)
  .route('/', companiesHandler)
  .route('/', configHandler)
  .route('/', metaHandler)
  .route('/', syncHandler)

export default app
