import { OpenAPIHono } from '@hono/zod-openapi'
import {
  clientHandler,
  estimationHandler,
  generalHandler,
  invoiceHandler,
  orderHandler,
  paymentHandler,
  paymentLinkHandler,
  productHandler,
  taxHandler,
  workTypeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clientHandler)
  .route('/', estimationHandler)
  .route('/', generalHandler)
  .route('/', invoiceHandler)
  .route('/', orderHandler)
  .route('/', paymentHandler)
  .route('/', paymentLinkHandler)
  .route('/', productHandler)
  .route('/', taxHandler)
  .route('/', workTypeHandler)

export default app
