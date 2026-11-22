import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  attributeHandler,
  basketHandler,
  bridgeHandler,
  cartHandler,
  categoryHandler,
  customerHandler,
  orderHandler,
  productHandler,
  subscriberHandler,
  taxHandler,
  webhookHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', attributeHandler)
  .route('/', basketHandler)
  .route('/', bridgeHandler)
  .route('/', cartHandler)
  .route('/', categoryHandler)
  .route('/', customerHandler)
  .route('/', orderHandler)
  .route('/', productHandler)
  .route('/', subscriberHandler)
  .route('/', taxHandler)
  .route('/', webhookHandler)

export default app
