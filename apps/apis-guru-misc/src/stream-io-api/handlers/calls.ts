import type { RouteHandler } from '@hono/zod-openapi'
import type { postCallsCallIdRoute, postCallsIndexRoute } from '../routes'

export const postCallsIndexRouteHandler: RouteHandler<typeof postCallsIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallsCallIdRouteHandler: RouteHandler<typeof postCallsCallIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
