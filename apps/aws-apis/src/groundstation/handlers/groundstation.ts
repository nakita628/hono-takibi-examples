import type { RouteHandler } from '@hono/zod-openapi'
import type { getGroundstationRoute } from '../routes'

export const getGroundstationRouteHandler: RouteHandler<typeof getGroundstationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
