import { OpenAPIHono } from '@hono/zod-openapi'
import { advancedHandler, basicHandler, multiLanguageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', basicHandler)
  .route('/', multiLanguageHandler)
  .route('/', advancedHandler)

export default app
