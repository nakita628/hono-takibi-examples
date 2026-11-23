import type { RouteHandler } from '@hono/zod-openapi'
import type { postListAddressesRoute } from '../routes'

export const postListAddressesRouteHandler: RouteHandler<typeof postListAddressesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
