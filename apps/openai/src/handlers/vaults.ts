import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getVaultsRoute,
  postVaultsRoute,
  getVaultsVaultIdRoute,
  postVaultsVaultIdRoute,
  deleteVaultsVaultIdRoute,
  getVaultsVaultIdCredentialsRoute,
  postVaultsVaultIdCredentialsRoute,
  getVaultsVaultIdCredentialsCredentialIdRoute,
  postVaultsVaultIdCredentialsCredentialIdRoute,
  deleteVaultsVaultIdCredentialsCredentialIdRoute,
} from '../routes'

export const getVaultsRouteHandler: RouteHandler<typeof getVaultsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postVaultsRouteHandler: RouteHandler<typeof postVaultsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVaultsVaultIdRouteHandler: RouteHandler<typeof getVaultsVaultIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVaultsVaultIdRouteHandler: RouteHandler<typeof postVaultsVaultIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteVaultsVaultIdRouteHandler: RouteHandler<
  typeof deleteVaultsVaultIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVaultsVaultIdCredentialsRouteHandler: RouteHandler<
  typeof getVaultsVaultIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVaultsVaultIdCredentialsRouteHandler: RouteHandler<
  typeof postVaultsVaultIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVaultsVaultIdCredentialsCredentialIdRouteHandler: RouteHandler<
  typeof getVaultsVaultIdCredentialsCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVaultsVaultIdCredentialsCredentialIdRouteHandler: RouteHandler<
  typeof postVaultsVaultIdCredentialsCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVaultsVaultIdCredentialsCredentialIdRouteHandler: RouteHandler<
  typeof deleteVaultsVaultIdCredentialsCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
