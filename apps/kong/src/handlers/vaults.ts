import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVaultsVaultIdOrPrefixRoute,
  getVaultsRoute,
  getVaultsVaultIdOrPrefixRoute,
  patchVaultsVaultIdOrPrefixRoute,
  postVaultsRoute,
  putVaultsVaultIdOrPrefixRoute,
} from '../routes'

export const getVaultsRouteHandler: RouteHandler<typeof getVaultsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVaultsRouteHandler: RouteHandler<typeof postVaultsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVaultsVaultIdOrPrefixRouteHandler: RouteHandler<
  typeof deleteVaultsVaultIdOrPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVaultsVaultIdOrPrefixRouteHandler: RouteHandler<
  typeof getVaultsVaultIdOrPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchVaultsVaultIdOrPrefixRouteHandler: RouteHandler<
  typeof patchVaultsVaultIdOrPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putVaultsVaultIdOrPrefixRouteHandler: RouteHandler<
  typeof putVaultsVaultIdOrPrefixRoute
> = async (c) => {
  throw new Error('Not implemented')
}
