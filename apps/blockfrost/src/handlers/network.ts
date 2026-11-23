import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworkErasRoute, getNetworkRoute } from '../routes'

export const getNetworkRouteHandler: RouteHandler<typeof getNetworkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworkErasRouteHandler: RouteHandler<typeof getNetworkErasRoute> = async (c) => {
  throw new Error('Not implemented')
}
