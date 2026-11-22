import { OpenAPIHono } from '@hono/zod-openapi'
import { dataIntegrationsHandler, eventIntegrationsHandler, tagsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dataIntegrationsHandler)
  .route('/', eventIntegrationsHandler)
  .route('/', tagsHandler)

export default app
