import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteResponsePlanRoute } from '../routes'

export const postDeleteResponsePlanRouteHandler: RouteHandler<
  typeof postDeleteResponsePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}
