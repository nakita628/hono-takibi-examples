import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthAuthorizeContextRoute,
  getOauthAuthorizeRoute,
  postOauthAuthorizeRoute,
  postOauthRegisterRoute,
  postOauthRevokeRoute,
  postOauthTokenRoute,
} from '../routes'

export const getOauthAuthorizeRouteHandler: RouteHandler<typeof getOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthAuthorizeRouteHandler: RouteHandler<typeof postOauthAuthorizeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOauthAuthorizeContextRouteHandler: RouteHandler<
  typeof getOauthAuthorizeContextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthRegisterRouteHandler: RouteHandler<typeof postOauthRegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthRevokeRouteHandler: RouteHandler<typeof postOauthRevokeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOauthTokenRouteHandler: RouteHandler<typeof postOauthTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
