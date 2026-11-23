import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateAverageRoute } from '../routes'

export const postCalculateAverageRouteHandler: RouteHandler<
  typeof postCalculateAverageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
