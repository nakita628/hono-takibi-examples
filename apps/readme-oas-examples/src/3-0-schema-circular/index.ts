import { OpenAPIHono } from '@hono/zod-openapi'
import { circularHandler, nestedTestHandler, notQuiteCircularHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', nestedTestHandler)
  .route('/', circularHandler)
  .route('/', notQuiteCircularHandler)

export default app
