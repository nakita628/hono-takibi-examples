import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthValidateRoute, postAuthPollRoute, postAuthStartRoute } from '../routes'

export const postAuthPollRouteHandler: RouteHandler<typeof postAuthPollRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAuthStartRouteHandler: RouteHandler<typeof postAuthStartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAuthValidateRouteHandler: RouteHandler<typeof getAuthValidateRoute> = async (c) => {
  throw new Error('Not implemented')
}
