import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRegistrycredentialsRegistryCredentialIdRoute,
  getRegistrycredentialsRegistryCredentialIdRoute,
  getRegistrycredentialsRoute,
  patchRegistrycredentialsRegistryCredentialIdRoute,
  postRegistrycredentialsRoute,
} from '../routes'

export const getRegistrycredentialsRouteHandler: RouteHandler<
  typeof getRegistrycredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRegistrycredentialsRouteHandler: RouteHandler<
  typeof postRegistrycredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRegistrycredentialsRegistryCredentialIdRouteHandler: RouteHandler<
  typeof getRegistrycredentialsRegistryCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchRegistrycredentialsRegistryCredentialIdRouteHandler: RouteHandler<
  typeof patchRegistrycredentialsRegistryCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRegistrycredentialsRegistryCredentialIdRouteHandler: RouteHandler<
  typeof deleteRegistrycredentialsRegistryCredentialIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
