import type { RouteHandler } from '@hono/zod-openapi'
import type { getLoginRoute, getLoginSsoRoute, postLoginRoute } from '../routes'

export const getLoginSsoRouteHandler: RouteHandler<typeof getLoginSsoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLoginRouteHandler: RouteHandler<typeof postLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLoginRouteHandler: RouteHandler<typeof getLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}
