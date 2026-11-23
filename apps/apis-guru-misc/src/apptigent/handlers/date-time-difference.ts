import type { RouteHandler } from '@hono/zod-openapi'
import type { postDateTimeDifferenceRoute } from '../routes'

export const postDateTimeDifferenceRouteHandler: RouteHandler<
  typeof postDateTimeDifferenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
