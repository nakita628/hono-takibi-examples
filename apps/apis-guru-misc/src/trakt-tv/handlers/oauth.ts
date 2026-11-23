import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthAuthorizeRoute,
  postOauthDeviceCodeRoute,
  postOauthDeviceTokenRoute,
  postOauthRevokeRoute,
  postOauthTokenRoute,
} from '../routes'

export const getOauthAuthorizeRouteHandler: RouteHandler<typeof getOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthDeviceCodeRouteHandler: RouteHandler<
  typeof postOauthDeviceCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthDeviceTokenRouteHandler: RouteHandler<
  typeof postOauthDeviceTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthRevokeRouteHandler: RouteHandler<typeof postOauthRevokeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
