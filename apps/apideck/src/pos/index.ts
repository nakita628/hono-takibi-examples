import { OpenAPIHono } from '@hono/zod-openapi'
import {
  itemsHandler,
  locationsHandler,
  merchantsHandler,
  modifierGroupsHandler,
  modifiersHandler,
  ordersHandler,
  orderTypesHandler,
  paymentsHandler,
  tendersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', itemsHandler)
  .route('/', locationsHandler)
  .route('/', merchantsHandler)
  .route('/', modifierGroupsHandler)
  .route('/', modifiersHandler)
  .route('/', orderTypesHandler)
  .route('/', ordersHandler)
  .route('/', paymentsHandler)
  .route('/', tendersHandler)

export default app
