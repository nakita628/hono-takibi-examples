import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrganizationsOrgIdAuditLogsRoute } from '../routes'

export const getOrganizationsOrgIdAuditLogsRouteHandler: RouteHandler<
  typeof getOrganizationsOrgIdAuditLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
