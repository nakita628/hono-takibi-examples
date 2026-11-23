import type { RouteHandler } from '@hono/zod-openapi'
import type { getOidcLoginRoute, getOidcLogoutRoute } from '../routes'

export const getOidcLoginRouteHandler: RouteHandler<typeof getOidcLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOidcLogoutRouteHandler: RouteHandler<typeof getOidcLogoutRoute> = async (c) => {
  throw new Error('Not implemented')
}
