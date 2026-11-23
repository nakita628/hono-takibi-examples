import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrganizationMembershipsRoute } from '../routes'

export const getOrganizationMembershipsRouteHandler: RouteHandler<
  typeof getOrganizationMembershipsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
