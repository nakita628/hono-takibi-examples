import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePluginsPluginIdRoute,
  deletePluginsPluginIdVersionRoute,
  getPluginsPluginIdConfigurationRoute,
  getPluginsPluginIdVersionImageRoute,
  getPluginsRoute,
  postPluginsPluginIdConfigurationRoute,
  postPluginsPluginIdManifestRoute,
  postPluginsPluginIdVersionDisableRoute,
  postPluginsPluginIdVersionEnableRoute,
  postPluginsSecurityInfoRoute,
} from '../routes'

export const getPluginsRouteHandler: RouteHandler<typeof getPluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsSecurityInfoRouteHandler: RouteHandler<
  typeof postPluginsSecurityInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsPluginIdRouteHandler: RouteHandler<
  typeof deletePluginsPluginIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsPluginIdConfigurationRouteHandler: RouteHandler<
  typeof getPluginsPluginIdConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsPluginIdConfigurationRouteHandler: RouteHandler<
  typeof postPluginsPluginIdConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsPluginIdManifestRouteHandler: RouteHandler<
  typeof postPluginsPluginIdManifestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePluginsPluginIdVersionRouteHandler: RouteHandler<
  typeof deletePluginsPluginIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsPluginIdVersionDisableRouteHandler: RouteHandler<
  typeof postPluginsPluginIdVersionDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPluginsPluginIdVersionEnableRouteHandler: RouteHandler<
  typeof postPluginsPluginIdVersionEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsPluginIdVersionImageRouteHandler: RouteHandler<
  typeof getPluginsPluginIdVersionImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
