import { OpenAPIHono } from '@hono/zod-openapi'
import { delcsHandler, malcsHandler, palcsHandler, relcsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', delcsHandler)
  .route('/', malcsHandler)
  .route('/', palcsHandler)
  .route('/', relcsHandler)

export default app
