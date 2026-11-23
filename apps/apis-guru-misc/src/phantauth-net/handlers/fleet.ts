import type { RouteHandler } from '@hono/zod-openapi'
import type { getFleetFleetnameRoute } from '../routes'

export const getFleetFleetnameRouteHandler: RouteHandler<typeof getFleetFleetnameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
