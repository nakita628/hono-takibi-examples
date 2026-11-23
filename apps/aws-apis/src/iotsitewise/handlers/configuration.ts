import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConfigurationAccountEncryptionRoute,
  getConfigurationAccountStorageRoute,
  postConfigurationAccountEncryptionRoute,
  postConfigurationAccountStorageRoute,
} from '../routes'

export const getConfigurationAccountEncryptionRouteHandler: RouteHandler<
  typeof getConfigurationAccountEncryptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConfigurationAccountEncryptionRouteHandler: RouteHandler<
  typeof postConfigurationAccountEncryptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigurationAccountStorageRouteHandler: RouteHandler<
  typeof getConfigurationAccountStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConfigurationAccountStorageRouteHandler: RouteHandler<
  typeof postConfigurationAccountStorageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
