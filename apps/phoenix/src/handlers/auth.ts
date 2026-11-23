import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAuthLogoutRoute,
  postAuthLdapLoginRoute,
  postAuthLoginRoute,
  postAuthPasswordResetEmailRoute,
  postAuthPasswordResetRoute,
  postAuthRefreshRoute,
} from '../routes'

export const postAuthLoginRouteHandler: RouteHandler<typeof postAuthLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthLogoutRouteHandler: RouteHandler<typeof getAuthLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthRefreshRouteHandler: RouteHandler<typeof postAuthRefreshRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthPasswordResetEmailRouteHandler: RouteHandler<
  typeof postAuthPasswordResetEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthPasswordResetRouteHandler: RouteHandler<
  typeof postAuthPasswordResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthLdapLoginRouteHandler: RouteHandler<typeof postAuthLdapLoginRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
