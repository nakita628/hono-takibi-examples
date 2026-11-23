import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuditCaseIndexRoute } from '../routes'

export const getAuditCaseIndexRouteHandler: RouteHandler<typeof getAuditCaseIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
