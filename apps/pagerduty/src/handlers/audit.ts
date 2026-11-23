import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuditRecordsRoute } from '../routes'

export const getAuditRecordsRouteHandler: RouteHandler<typeof getAuditRecordsRoute> = async (c) => {
  throw new Error('Not implemented')
}
