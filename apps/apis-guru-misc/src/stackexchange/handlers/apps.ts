import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsAccessTokensDeAuthenticateRoute } from '../routes'

export const getAppsAccessTokensDeAuthenticateRouteHandler: RouteHandler<
  typeof getAppsAccessTokensDeAuthenticateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
