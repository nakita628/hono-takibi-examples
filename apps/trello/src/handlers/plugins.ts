import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPluginsIdComplianceMemberPrivacyRoute,
  getPluginsIdIndexRoute,
  postPluginsIdPluginListingsRoute,
  putPluginsIdIndexRoute,
  putPluginsIdPluginListingsIdListingRoute,
} from '../routes'

export const getPluginsIdIndexRouteHandler: RouteHandler<typeof getPluginsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putPluginsIdIndexRouteHandler: RouteHandler<typeof putPluginsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPluginsIdPluginListingsRouteHandler: RouteHandler<
  typeof postPluginsIdPluginListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPluginsIdComplianceMemberPrivacyRouteHandler: RouteHandler<
  typeof getPluginsIdComplianceMemberPrivacyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPluginsIdPluginListingsIdListingRouteHandler: RouteHandler<
  typeof putPluginsIdPluginListingsIdListingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
