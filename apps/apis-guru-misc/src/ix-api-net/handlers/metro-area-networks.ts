import type { RouteHandler } from '@hono/zod-openapi'
import type { getMetroAreaNetworksIdRoute, getMetroAreaNetworksRoute } from '../routes'

export const getMetroAreaNetworksRouteHandler: RouteHandler<
  typeof getMetroAreaNetworksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMetroAreaNetworksIdRouteHandler: RouteHandler<
  typeof getMetroAreaNetworksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
