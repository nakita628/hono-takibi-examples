import type { RouteHandler } from '@hono/zod-openapi'
import type { getAdvertisingEligibilityRoute } from '../routes'

export const getAdvertisingEligibilityRouteHandler: RouteHandler<
  typeof getAdvertisingEligibilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
