import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateResponsePlanRoute } from '../routes'

export const postCreateResponsePlanRouteHandler: RouteHandler<
  typeof postCreateResponsePlanRoute
> = async (c) => {
  throw new Error('Not implemented')
}
