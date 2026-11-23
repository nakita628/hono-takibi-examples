import type { RouteHandler } from '@hono/zod-openapi'
import type { getFindPlacesPrefixRoute } from '../routes'

export const getFindPlacesPrefixRouteHandler: RouteHandler<
  typeof getFindPlacesPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}
