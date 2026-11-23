import type { RouteHandler } from '@hono/zod-openapi'
import type { getNetworksIdRoute, getNetworksRoute } from '../routes'

export const getNetworksRouteHandler: RouteHandler<typeof getNetworksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getNetworksIdRouteHandler: RouteHandler<typeof getNetworksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
