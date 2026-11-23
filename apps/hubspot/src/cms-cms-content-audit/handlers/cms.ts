import type { RouteHandler } from '@hono/zod-openapi'
import type { getCmsAuditLogs202609Route, postCmsAuditLogs202609ExportRoute } from '../routes'

export const getCmsAuditLogs202609RouteHandler: RouteHandler<
  typeof getCmsAuditLogs202609Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCmsAuditLogs202609ExportRouteHandler: RouteHandler<
  typeof postCmsAuditLogs202609ExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
