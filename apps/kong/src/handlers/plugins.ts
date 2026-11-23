import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePluginsPluginIdRoute,
  getPluginsPluginIdRoute,
  getPluginsRoute,
  patchPluginsPluginIdRoute,
  postPluginsRoute,
  putPluginsPluginIdRoute,
} from '../routes'

export const getPluginsRouteHandler: RouteHandler<typeof getPluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsRouteHandler: RouteHandler<typeof postPluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsPluginIdRouteHandler: RouteHandler<
  typeof deletePluginsPluginIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsPluginIdRouteHandler: RouteHandler<typeof getPluginsPluginIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchPluginsPluginIdRouteHandler: RouteHandler<
  typeof patchPluginsPluginIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsPluginIdRouteHandler: RouteHandler<typeof putPluginsPluginIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
