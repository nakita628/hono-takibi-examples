import type { RouteHandler } from '@hono/zod-openapi'
import type { getLoginRoute, postLoginRoute } from '../routes'

export const postLoginRouteHandler: RouteHandler<typeof postLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLoginRouteHandler: RouteHandler<typeof getLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}
