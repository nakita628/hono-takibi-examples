import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartConfigJsonRoute } from '../routes'

export const getCartConfigJsonRouteHandler: RouteHandler<typeof getCartConfigJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
