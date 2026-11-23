import { OpenAPIHono } from '@hono/zod-openapi'
import { notificatorHandler, offerManagerHandler, sellerRegisterHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', notificatorHandler)
  .route('/', offerManagerHandler)
  .route('/', sellerRegisterHandler)

export default app
