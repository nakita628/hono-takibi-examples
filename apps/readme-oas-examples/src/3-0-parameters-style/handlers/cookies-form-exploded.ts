import type { RouteHandler } from '@hono/zod-openapi'
import type { getCookiesFormExplodedRoute } from '../routes'

export const getCookiesFormExplodedRouteHandler: RouteHandler<
  typeof getCookiesFormExplodedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
