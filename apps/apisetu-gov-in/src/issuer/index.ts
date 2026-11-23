import { OpenAPIHono } from '@hono/zod-openapi'
import { yourPullDocRequestApiPathHandler, yourPullUriRequestApiPathHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', yourPullDocRequestApiPathHandler)
  .route('/', yourPullUriRequestApiPathHandler)

export default app
