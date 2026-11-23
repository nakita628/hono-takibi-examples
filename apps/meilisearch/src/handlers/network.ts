import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworkRoute, patchNetworkRoute } from '../routes'

export const getNetworkRouteHandler: RouteHandler<typeof getNetworkRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchNetworkRouteHandler: RouteHandler<typeof patchNetworkRoute> = async (c) => {
  throw new Error('Not implemented')
}
