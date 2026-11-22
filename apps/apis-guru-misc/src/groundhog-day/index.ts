import { OpenAPIHono } from '@hono/zod-openapi'
import { groundhogsHandler, infoHandler, predictionsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', infoHandler)
  .route('/', groundhogsHandler)
  .route('/', predictionsHandler)

export default app
