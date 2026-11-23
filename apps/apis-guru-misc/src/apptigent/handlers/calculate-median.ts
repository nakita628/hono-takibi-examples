import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateMedianRoute } from '../routes'

export const postCalculateMedianRouteHandler: RouteHandler<
  typeof postCalculateMedianRoute
> = async (c) => {
  throw new Error('Not implemented')
}
