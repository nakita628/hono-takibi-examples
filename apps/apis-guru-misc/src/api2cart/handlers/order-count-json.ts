import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderCountJsonRoute } from '../routes'

export const getOrderCountJsonRouteHandler: RouteHandler<typeof getOrderCountJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
