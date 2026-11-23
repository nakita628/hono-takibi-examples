import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSsoAuthorizeRoute,
  getSsoJwksClientIdRoute,
  getSsoLogoutRoute,
  getSsoProfileRoute,
  postSsoLogoutAuthorizeRoute,
  postSsoTokenRoute,
} from '../routes'

export const getSsoAuthorizeRouteHandler: RouteHandler<typeof getSsoAuthorizeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSsoJwksClientIdRouteHandler: RouteHandler<typeof getSsoJwksClientIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSsoLogoutRouteHandler: RouteHandler<typeof getSsoLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSsoLogoutAuthorizeRouteHandler: RouteHandler<
  typeof postSsoLogoutAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSsoProfileRouteHandler: RouteHandler<typeof getSsoProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSsoTokenRouteHandler: RouteHandler<typeof postSsoTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
