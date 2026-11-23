import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAddonsConfigurationSchemasAddonNameAddonVersionRoute,
  getAddonsSupportedVersionsRoute,
} from '../routes'

export const getAddonsConfigurationSchemasAddonNameAddonVersionRouteHandler: RouteHandler<
  typeof getAddonsConfigurationSchemasAddonNameAddonVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAddonsSupportedVersionsRouteHandler: RouteHandler<
  typeof getAddonsSupportedVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
