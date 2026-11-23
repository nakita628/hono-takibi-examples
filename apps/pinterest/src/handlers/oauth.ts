import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postOauthConversionTokenRoute,
  postOauthTokenRevokeRoute,
  postOauthTokenRoute,
} from '../routes'

export const postOauthConversionTokenRouteHandler: RouteHandler<
  typeof postOauthConversionTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTokenRevokeRouteHandler: RouteHandler<
  typeof postOauthTokenRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
