import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDataIntegrationsIdentifierRoute,
  getDataIntegrationsIdentifierAssociationsRoute,
  getDataIntegrationsIdentifierRoute,
  getDataIntegrationsRoute,
  patchDataIntegrationsIdentifierRoute,
  postDataIntegrationsRoute,
} from '../routes'

export const postDataIntegrationsRouteHandler: RouteHandler<
  typeof postDataIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataIntegrationsRouteHandler: RouteHandler<
  typeof getDataIntegrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDataIntegrationsIdentifierRouteHandler: RouteHandler<
  typeof deleteDataIntegrationsIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataIntegrationsIdentifierRouteHandler: RouteHandler<
  typeof getDataIntegrationsIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDataIntegrationsIdentifierRouteHandler: RouteHandler<
  typeof patchDataIntegrationsIdentifierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDataIntegrationsIdentifierAssociationsRouteHandler: RouteHandler<
  typeof getDataIntegrationsIdentifierAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
