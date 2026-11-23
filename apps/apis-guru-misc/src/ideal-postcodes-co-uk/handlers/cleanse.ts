import type { RouteHandler } from '@hono/zod-openapi'
import type { postCleanseAddressesRoute } from '../routes'

export const postCleanseAddressesRouteHandler: RouteHandler<
  typeof postCleanseAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
