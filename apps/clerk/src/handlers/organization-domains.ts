import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrganizationDomainsRoute } from '../routes'

export const getOrganizationDomainsRouteHandler: RouteHandler<
  typeof getOrganizationDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
