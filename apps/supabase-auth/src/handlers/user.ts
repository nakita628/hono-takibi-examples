import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteUserIdentitiesIdentityIdRoute,
  deleteUserOauthGrantsRoute,
  getUserIdentitiesAuthorizeRoute,
  getUserOauthGrantsRoute,
  getUserRoute,
  putUserRoute,
} from '../routes'

export const getUserRouteHandler: RouteHandler<typeof getUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserRouteHandler: RouteHandler<typeof putUserRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserIdentitiesAuthorizeRouteHandler: RouteHandler<
  typeof getUserIdentitiesAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteUserIdentitiesIdentityIdRouteHandler: RouteHandler<
  typeof deleteUserIdentitiesIdentityIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserOauthGrantsRouteHandler: RouteHandler<typeof getUserOauthGrantsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteUserOauthGrantsRouteHandler: RouteHandler<
  typeof deleteUserOauthGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
