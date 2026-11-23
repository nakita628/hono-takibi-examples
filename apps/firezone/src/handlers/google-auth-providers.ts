import type { RouteHandler } from '@hono/zod-openapi'
import type { getGoogleAuthProvidersIdRoute, getGoogleAuthProvidersRoute } from '../routes'

export const getGoogleAuthProvidersRouteHandler: RouteHandler<
  typeof getGoogleAuthProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGoogleAuthProvidersIdRouteHandler: RouteHandler<
  typeof getGoogleAuthProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
