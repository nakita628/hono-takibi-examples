import { OpenAPIHono } from '@hono/zod-openapi'
import {
  airtravelCoordinatesHandler,
  airtravelMultilegHandler,
  ecommerceDeliveryHandler,
  requestApiKeyHandler,
  roadDistanceHandler,
  urbanDeliveryHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', airtravelCoordinatesHandler)
  .route('/', airtravelMultilegHandler)
  .route('/', ecommerceDeliveryHandler)
  .route('/', requestApiKeyHandler)
  .route('/', roadDistanceHandler)
  .route('/', urbanDeliveryHandler)

export default app
