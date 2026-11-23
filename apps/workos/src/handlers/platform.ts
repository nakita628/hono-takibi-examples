import type { RouteHandler } from '@hono/zod-openapi'
import type { getPlatformTeamsTeamIdRoute, postPlatformTeamsRoute } from '../routes'

export const postPlatformTeamsRouteHandler: RouteHandler<typeof postPlatformTeamsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPlatformTeamsTeamIdRouteHandler: RouteHandler<
  typeof getPlatformTeamsTeamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
