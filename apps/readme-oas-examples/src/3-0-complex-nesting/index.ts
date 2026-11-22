import { OpenAPIHono } from '@hono/zod-openapi'
import { anythingHandler, multischemaHandler, topLevelObjectHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', anythingHandler)
  .route('/', topLevelObjectHandler)
  .route('/', multischemaHandler)

export default app
