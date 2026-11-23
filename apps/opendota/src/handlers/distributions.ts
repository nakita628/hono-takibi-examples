import type { RouteHandler } from '@hono/zod-openapi'
import type { getDistributionsRoute } from '../routes'

export const getDistributionsRouteHandler: RouteHandler<typeof getDistributionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
