import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountingHandler,
  inventoryHandler,
  oauthHandler,
  ordersHandler,
  returnsHandler,
  trackHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountingHandler)
  .route('/', inventoryHandler)
  .route('/', oauthHandler)
  .route('/', ordersHandler)
  .route('/', returnsHandler)
  .route('/', trackHandler)
  .route('/', usersHandler)

export default app
