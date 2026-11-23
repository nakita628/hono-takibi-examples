import type { RouteHandler } from '@hono/zod-openapi'
import type { getSearchperpackageRoute } from '../routes'

export const getSearchperpackageRouteHandler: RouteHandler<
  typeof getSearchperpackageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
