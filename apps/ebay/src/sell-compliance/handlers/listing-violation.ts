import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingViolationRoute } from '../routes'

export const getListingViolationRouteHandler: RouteHandler<
  typeof getListingViolationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
