import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCredentialConnectionsIdRoute,
  getCredentialConnectionsIdRoute,
  getCredentialConnectionsRoute,
  patchCredentialConnectionsIdRoute,
  postCredentialConnectionsIdActionsCheckRegistrationStatusRoute,
  postCredentialConnectionsRoute,
} from '../routes'

export const getCredentialConnectionsRouteHandler: RouteHandler<
  typeof getCredentialConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCredentialConnectionsRouteHandler: RouteHandler<
  typeof postCredentialConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCredentialConnectionsIdRouteHandler: RouteHandler<
  typeof deleteCredentialConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCredentialConnectionsIdRouteHandler: RouteHandler<
  typeof getCredentialConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCredentialConnectionsIdRouteHandler: RouteHandler<
  typeof patchCredentialConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCredentialConnectionsIdActionsCheckRegistrationStatusRouteHandler: RouteHandler<
  typeof postCredentialConnectionsIdActionsCheckRegistrationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
