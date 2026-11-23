import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAuthLogoutTokenRoute,
  getAuthTokenBasicuserinformationRoute,
  postAuthLoginRoute,
} from '../routes'

export const postAuthLoginRouteHandler: RouteHandler<typeof postAuthLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAuthLogoutTokenRouteHandler: RouteHandler<
  typeof deleteAuthLogoutTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthTokenBasicuserinformationRouteHandler: RouteHandler<
  typeof getAuthTokenBasicuserinformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
