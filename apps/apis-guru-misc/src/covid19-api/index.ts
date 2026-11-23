import { OpenAPIHono } from '@hono/zod-openapi'
import { countryHandler, helpHandler, reportHandler, totalsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', countryHandler)
  .route('/', helpHandler)
  .route('/', reportHandler)
  .route('/', totalsHandler)

export default app
