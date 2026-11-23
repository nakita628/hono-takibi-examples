import type { RouteHandler } from '@hono/zod-openapi'
import type { postSignInTokensRoute, postSignInTokensSignInTokenIdRevokeRoute } from '../routes'

export const postSignInTokensRouteHandler: RouteHandler<typeof postSignInTokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSignInTokensSignInTokenIdRevokeRouteHandler: RouteHandler<
  typeof postSignInTokensSignInTokenIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
