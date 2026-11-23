import { OpenAPIHono } from '@hono/zod-openapi'
import { channelsHandler, keysHandler, pushHandler, statsHandler, timeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', channelsHandler)
  .route('/', keysHandler)
  .route('/', pushHandler)
  .route('/', statsHandler)
  .route('/', timeHandler)

export default app
