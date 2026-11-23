import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateResponsePlanRoute } from '../routes'

export const postUpdateResponsePlanRouteHandler: RouteHandler<
  typeof postUpdateResponsePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}
