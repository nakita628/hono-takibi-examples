import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postOauth2RevokeRoute,
  postOauth2TokenRefreshRoute,
  postOauth2TokenRoute,
} from '../routes'

export const postOauth2TokenRouteHandler: RouteHandler<typeof postOauth2TokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2TokenRefreshRouteHandler: RouteHandler<
  typeof postOauth2TokenRefreshRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauth2RevokeRouteHandler: RouteHandler<typeof postOauth2RevokeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
