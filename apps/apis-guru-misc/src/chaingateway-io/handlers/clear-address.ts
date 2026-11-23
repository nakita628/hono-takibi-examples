import type { RouteHandler } from '@hono/zod-openapi'
import type { postClearAddressRoute } from '../routes'

export const postClearAddressRouteHandler: RouteHandler<typeof postClearAddressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
