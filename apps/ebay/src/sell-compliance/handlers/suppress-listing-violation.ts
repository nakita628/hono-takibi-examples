import type { RouteHandler } from '@hono/zod-openapi'
import type { postSuppressListingViolationRoute } from '../routes'

export const postSuppressListingViolationRouteHandler: RouteHandler<
  typeof postSuppressListingViolationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
