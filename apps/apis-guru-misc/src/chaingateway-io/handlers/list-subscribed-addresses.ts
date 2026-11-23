import type { RouteHandler } from '@hono/zod-openapi'
import type { postListSubscribedAddressesRoute } from '../routes'

export const postListSubscribedAddressesRouteHandler: RouteHandler<
  typeof postListSubscribedAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
