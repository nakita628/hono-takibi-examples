import { OpenAPIHono } from '@hono/zod-openapi'
import { keysApiHandler, productsApiHandler, subscriptionsApiHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', keysApiHandler)
  .route('/', productsApiHandler)
  .route('/', subscriptionsApiHandler)

export default app
