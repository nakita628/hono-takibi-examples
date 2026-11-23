import type { RouteHandler } from '@hono/zod-openapi'
import type { getOktaAuthProvidersIdRoute, getOktaAuthProvidersRoute } from '../routes'

export const getOktaAuthProvidersRouteHandler: RouteHandler<
  typeof getOktaAuthProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOktaAuthProvidersIdRouteHandler: RouteHandler<
  typeof getOktaAuthProvidersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
