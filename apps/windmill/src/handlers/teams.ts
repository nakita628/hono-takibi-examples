import type { RouteHandler } from '@hono/zod-openapi'
import type { postTeamsActivitiesRoute } from '../routes'

export const postTeamsActivitiesRouteHandler: RouteHandler<
  typeof postTeamsActivitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
