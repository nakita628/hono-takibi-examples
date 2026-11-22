import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressRequestsHandler,
  infoRequestsHandler,
  subscriptionIPNRequestsHandler,
  transactionRequestsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', transactionRequestsHandler)
  .route('/', addressRequestsHandler)
  .route('/', infoRequestsHandler)
  .route('/', subscriptionIPNRequestsHandler)

export default app
