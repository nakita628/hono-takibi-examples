import type { RouteHandler } from '@hono/zod-openapi'
import type { getCallsRoute, postCallsRoute } from '../routes'

export const getCallsRouteHandler: RouteHandler<typeof getCallsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallsRouteHandler: RouteHandler<typeof postCallsRoute> = async (c) => {
  throw new Error('Not implemented')
}
