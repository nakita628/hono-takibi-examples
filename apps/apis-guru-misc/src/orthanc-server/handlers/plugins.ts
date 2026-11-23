import type { RouteHandler } from '@hono/zod-openapi'
import type { getPluginsExplorerJsRoute, getPluginsIdRoute, getPluginsRoute } from '../routes'

export const getPluginsRouteHandler: RouteHandler<typeof getPluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsExplorerJsRouteHandler: RouteHandler<
  typeof getPluginsExplorerJsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsIdRouteHandler: RouteHandler<typeof getPluginsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
