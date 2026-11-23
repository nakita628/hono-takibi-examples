import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingConditionsRoute } from '../routes'

export const getListingConditionsRouteHandler: RouteHandler<
  typeof getListingConditionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
