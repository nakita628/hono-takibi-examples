import { OpenAPIHono } from '@hono/zod-openapi'
import { channelsHandler, keysHandler, pushHandler, statsHandler, timeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', channelsHandler)
  .route('/', pushHandler)
  .route('/', keysHandler)
  .route('/', statsHandler)
  .route('/', timeHandler)

export default app
