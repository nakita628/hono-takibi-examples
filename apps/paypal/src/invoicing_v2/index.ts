import { OpenAPIHono } from '@hono/zod-openapi'
import {
  connectionsHandler,
  invoiceConnectionDetailsHandler,
  invoicesHandler,
  searchInvoicesHandler,
  templatesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', invoicesHandler)
  .route('/', searchInvoicesHandler)
  .route('/', templatesHandler)
  .route('/', connectionsHandler)
  .route('/', invoiceConnectionDetailsHandler)

export default app
