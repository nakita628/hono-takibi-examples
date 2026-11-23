import type { RouteHandler } from '@hono/zod-openapi'
import type { getListingViolationSummaryRoute } from '../routes'

export const getListingViolationSummaryRouteHandler: RouteHandler<
  typeof getListingViolationSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
