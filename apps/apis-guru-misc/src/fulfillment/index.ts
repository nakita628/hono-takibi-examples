import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountingHandler,
  authHandler,
  inventoryHandler,
  ordersHandler,
  partnersHandler,
  returnsHandler,
  trackingHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountingHandler)
  .route('/', inventoryHandler)
  .route('/', authHandler)
  .route('/', ordersHandler)
  .route('/', partnersHandler)
  .route('/', returnsHandler)
  .route('/', trackingHandler)
  .route('/', usersHandler)

export default app
