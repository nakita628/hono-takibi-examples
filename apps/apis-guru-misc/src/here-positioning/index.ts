import { OpenAPIHono } from '@hono/zod-openapi'
import { healthHandler, locateHandler, versionHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', healthHandler)
  .route('/', locateHandler)
  .route('/', versionHandler)

export default app
