import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteAddressRoute } from '../routes'

export const postDeleteAddressRouteHandler: RouteHandler<typeof postDeleteAddressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
