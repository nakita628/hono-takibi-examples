import type { RouteHandler } from '@hono/zod-openapi'
import type { getOidcAuthProvidersIdRoute, getOidcAuthProvidersRoute } from '../routes'

export const getOidcAuthProvidersRouteHandler: RouteHandler<
  typeof getOidcAuthProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOidcAuthProvidersIdRouteHandler: RouteHandler<
  typeof getOidcAuthProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
