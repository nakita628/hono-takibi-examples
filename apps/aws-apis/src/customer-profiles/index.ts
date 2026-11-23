import { OpenAPIHono } from '@hono/zod-openapi'
import { domainsHandler, integrationsHandler, tagsHandler, templatesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', domainsHandler)
  .route('/', templatesHandler)
  .route('/', integrationsHandler)
  .route('/', tagsHandler)

export default app
