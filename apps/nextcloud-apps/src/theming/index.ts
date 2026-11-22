import { OpenAPIHono } from '@hono/zod-openapi'
import { iconHandler, themingHandler, userThemeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', themingHandler)
  .route('/', iconHandler)
  .route('/', userThemeHandler)

export default app
