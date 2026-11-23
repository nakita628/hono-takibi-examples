import type { RouteHandler } from '@hono/zod-openapi'
import type { postStartQueryPlanningRoute } from '../routes'

export const postStartQueryPlanningRouteHandler: RouteHandler<
  typeof postStartQueryPlanningRoute
> = async (c) => {
  throw new Error('Not implemented')
}
