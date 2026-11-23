import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteOauth2TokensRoute, postOauth2TokensRoute } from '../routes'

export const postOauth2TokensRouteHandler: RouteHandler<typeof postOauth2TokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteOauth2TokensRouteHandler: RouteHandler<typeof deleteOauth2TokensRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
