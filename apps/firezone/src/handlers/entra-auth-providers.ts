import type { RouteHandler } from '@hono/zod-openapi'
import type { getEntraAuthProvidersIdRoute, getEntraAuthProvidersRoute } from '../routes'

export const getEntraAuthProvidersRouteHandler: RouteHandler<
  typeof getEntraAuthProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEntraAuthProvidersIdRouteHandler: RouteHandler<
  typeof getEntraAuthProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
