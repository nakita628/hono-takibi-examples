import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchAspectIdFullsearchRoute } from '../routes'

export const getSearchAspectIdFullsearchRouteHandler: RouteHandler<
  typeof getSearchAspectIdFullsearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
