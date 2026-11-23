import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccessTokensAccessTokensInvalidateRoute,
  getAccessTokensAccessTokensRoute,
} from '../routes'

export const getAccessTokensAccessTokensRouteHandler: RouteHandler<
  typeof getAccessTokensAccessTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccessTokensAccessTokensInvalidateRouteHandler: RouteHandler<
  typeof getAccessTokensAccessTokensInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
