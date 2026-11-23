import { OpenAPIHono } from '@hono/zod-openapi'
import { getCmsAuditLogs202609Route, postCmsAuditLogs202609ExportRoute } from './routes'
import {
  getCmsAuditLogs202609RouteHandler,
  postCmsAuditLogs202609ExportRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getCmsAuditLogs202609Route, getCmsAuditLogs202609RouteHandler)
  .openapi(postCmsAuditLogs202609ExportRoute, postCmsAuditLogs202609ExportRouteHandler)

export default app
