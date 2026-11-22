import type { RouteHandler } from '@hono/zod-openapi'
import type { getV2OrganizationsTeamsRoute, postV2OrganizationsTeamRoute } from '../routes'

export const postV2OrganizationsTeamRouteHandler: RouteHandler<
  typeof postV2OrganizationsTeamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2OrganizationsTeamsRouteHandler: RouteHandler<
  typeof getV2OrganizationsTeamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
