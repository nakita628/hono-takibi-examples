import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuditPrimaryCategoryIndexRoute } from '../routes'

export const getAuditPrimaryCategoryIndexRouteHandler: RouteHandler<
  typeof getAuditPrimaryCategoryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
