import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchRoutingProfilesRoute } from '../routes'

export const postSearchRoutingProfilesRouteHandler: RouteHandler<
  typeof postSearchRoutingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
