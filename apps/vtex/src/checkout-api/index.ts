import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cartAttachmentsHandler,
  configurationHandler,
  customDataHandler,
  fulfillmentHandler,
  orderPlacementHandler,
  regionHandler,
  shoppingCartHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', orderPlacementHandler)
  .route('/', shoppingCartHandler)
  .route('/', cartAttachmentsHandler)
  .route('/', customDataHandler)
  .route('/', configurationHandler)
  .route('/', fulfillmentHandler)
  .route('/', regionHandler)

export default app
