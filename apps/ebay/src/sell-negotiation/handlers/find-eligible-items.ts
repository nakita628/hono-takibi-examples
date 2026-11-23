import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindEligibleItemsRoute } from '../routes'

export const getFindEligibleItemsRouteHandler: RouteHandler<
  typeof getFindEligibleItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
