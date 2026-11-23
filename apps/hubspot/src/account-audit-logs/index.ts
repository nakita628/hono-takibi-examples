import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountInfo202609ActivityAuditLogsRoute,
  getAccountInfo202609ActivityLoginRoute,
  getAccountInfo202609ActivitySecurityRoute,
} from './routes'
import {
  getAccountInfo202609ActivityAuditLogsRouteHandler,
  getAccountInfo202609ActivityLoginRouteHandler,
  getAccountInfo202609ActivitySecurityRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getAccountInfo202609ActivityAuditLogsRoute,
    getAccountInfo202609ActivityAuditLogsRouteHandler,
  )
  .openapi(getAccountInfo202609ActivityLoginRoute, getAccountInfo202609ActivityLoginRouteHandler)
  .openapi(
    getAccountInfo202609ActivitySecurityRoute,
    getAccountInfo202609ActivitySecurityRouteHandler,
  )

export default app
