import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteIntegrationsCommerceExternalBusinessIdRoute,
  getIntegrationsCommerceExternalBusinessIdRoute,
  getIntegrationsIdRoute,
  getIntegrationsRoute,
  patchIntegrationsCommerceExternalBusinessIdRoute,
  postIntegrationsCommerceRoute,
  postIntegrationsLogsRoute,
} from '../routes'

export const getIntegrationsRouteHandler: RouteHandler<typeof getIntegrationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postIntegrationsCommerceRouteHandler: RouteHandler<
  typeof postIntegrationsCommerceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntegrationsCommerceExternalBusinessIdRouteHandler: RouteHandler<
  typeof getIntegrationsCommerceExternalBusinessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIntegrationsCommerceExternalBusinessIdRouteHandler: RouteHandler<
  typeof patchIntegrationsCommerceExternalBusinessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIntegrationsCommerceExternalBusinessIdRouteHandler: RouteHandler<
  typeof deleteIntegrationsCommerceExternalBusinessIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIntegrationsLogsRouteHandler: RouteHandler<
  typeof postIntegrationsLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntegrationsIdRouteHandler: RouteHandler<typeof getIntegrationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
