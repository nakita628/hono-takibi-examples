import type { RouteHandler } from '@hono/zod-openapi'
import type { getCallbackRoute, postCallbackRoute } from '../routes'

export const getCallbackRouteHandler: RouteHandler<typeof getCallbackRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallbackRouteHandler: RouteHandler<typeof postCallbackRoute> = async (c) => {
  throw new Error('Not implemented')
}
