import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIntegrationsIntegrationIdRoute,
  getIntegrationsIndexRoute,
  getIntegrationsIntegrationIdActivateRoute,
  getIntegrationsIntegrationIdRoute,
  patchIntegrationsIntegrationIdRoute,
  postIntegrationsIndexRoute,
} from '../routes'

export const getIntegrationsIndexRouteHandler: RouteHandler<
  typeof getIntegrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIntegrationsIndexRouteHandler: RouteHandler<
  typeof postIntegrationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIntegrationsIntegrationIdRouteHandler: RouteHandler<
  typeof deleteIntegrationsIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntegrationsIntegrationIdRouteHandler: RouteHandler<
  typeof getIntegrationsIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIntegrationsIntegrationIdRouteHandler: RouteHandler<
  typeof patchIntegrationsIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntegrationsIntegrationIdActivateRouteHandler: RouteHandler<
  typeof getIntegrationsIntegrationIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
