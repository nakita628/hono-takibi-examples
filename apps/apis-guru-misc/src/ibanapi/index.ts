import { OpenAPIHono } from '@hono/zod-openapi'
import { balanceHandler, validateBasicHandler, validateHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', balanceHandler)
  .route('/', validateHandler)
  .route('/', validateBasicHandler)

export default app
