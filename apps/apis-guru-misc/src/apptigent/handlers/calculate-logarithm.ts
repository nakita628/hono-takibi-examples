import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateLogarithmRoute } from '../routes'

export const postCalculateLogarithmRouteHandler: RouteHandler<
  typeof postCalculateLogarithmRoute
> = async (c) => {
  throw new Error('Not implemented')
}
