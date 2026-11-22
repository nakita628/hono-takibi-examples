import { OpenAPIHono } from '@hono/zod-openapi'
import { actionsHandler, domainsHandler, notificationsHandler, v1Handler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1Handler)
  .route('/', domainsHandler)
  .route('/', notificationsHandler)
  .route('/', actionsHandler)

export default app
