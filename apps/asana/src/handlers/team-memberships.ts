import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamMembershipsRoute, getTeamMembershipsTeamMembershipGidRoute } from '../routes'

export const getTeamMembershipsTeamMembershipGidRouteHandler: RouteHandler<
  typeof getTeamMembershipsTeamMembershipGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamMembershipsRouteHandler: RouteHandler<typeof getTeamMembershipsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
