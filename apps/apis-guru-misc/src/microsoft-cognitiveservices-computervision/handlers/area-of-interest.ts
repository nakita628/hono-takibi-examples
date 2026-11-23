import type { RouteHandler } from '@hono/zod-openapi'
import type { postAreaOfInterestRoute } from '../routes'

export const postAreaOfInterestRouteHandler: RouteHandler<typeof postAreaOfInterestRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
