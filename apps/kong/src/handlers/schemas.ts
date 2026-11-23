import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSchemasEntityRoute,
  getSchemasFiltersFilterNameRoute,
  getSchemasPluginsPluginNameRoute,
  getSchemasVaultsVaultNameRoute,
  postSchemasEntityValidateRoute,
  postSchemasPluginsValidateRoute,
  postSchemasVaultsVaultNameRoute,
} from '../routes'

export const getSchemasEntityRouteHandler: RouteHandler<typeof getSchemasEntityRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postSchemasEntityValidateRouteHandler: RouteHandler<
  typeof postSchemasEntityValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemasFiltersFilterNameRouteHandler: RouteHandler<
  typeof getSchemasFiltersFilterNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemasPluginsPluginNameRouteHandler: RouteHandler<
  typeof getSchemasPluginsPluginNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSchemasPluginsValidateRouteHandler: RouteHandler<
  typeof postSchemasPluginsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSchemasVaultsVaultNameRouteHandler: RouteHandler<
  typeof getSchemasVaultsVaultNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSchemasVaultsVaultNameRouteHandler: RouteHandler<
  typeof postSchemasVaultsVaultNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
