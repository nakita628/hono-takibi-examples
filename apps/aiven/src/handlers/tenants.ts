import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTenantsTenantOsAvailablePluginsRoute,
  getTenantsTenantPgAvailableExtensionsRoute,
  getTenantsTenantPrivatelinkAvailabilityRoute,
  getTenantsTenantStaticIpAvailabilityRoute,
} from '../routes'

export const getTenantsTenantPrivatelinkAvailabilityRouteHandler: RouteHandler<
  typeof getTenantsTenantPrivatelinkAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTenantsTenantStaticIpAvailabilityRouteHandler: RouteHandler<
  typeof getTenantsTenantStaticIpAvailabilityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTenantsTenantOsAvailablePluginsRouteHandler: RouteHandler<
  typeof getTenantsTenantOsAvailablePluginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTenantsTenantPgAvailableExtensionsRouteHandler: RouteHandler<
  typeof getTenantsTenantPgAvailableExtensionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
