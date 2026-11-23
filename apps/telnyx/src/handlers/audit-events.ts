import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuditEventsRoute } from '../routes'

export const getAuditEventsRouteHandler: RouteHandler<typeof getAuditEventsRoute> = async (c) => {
  throw new Error('Not implemented')
}
