import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuditCategoryIndexRoute } from '../routes'

export const getAuditCategoryIndexRouteHandler: RouteHandler<
  typeof getAuditCategoryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
