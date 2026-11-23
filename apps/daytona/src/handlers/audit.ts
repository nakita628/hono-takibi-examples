import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuditOrganizationsOrganizationIdRoute } from '../routes'

export const getAuditOrganizationsOrganizationIdRouteHandler: RouteHandler<
  typeof getAuditOrganizationsOrganizationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
