import type { RouteHandler } from '@hono/zod-openapi'
import type { getAuthenticationOptionsRoute, putAuthenticationOptionsRoute } from '../routes'

export const getAuthenticationOptionsRouteHandler: RouteHandler<
  typeof getAuthenticationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAuthenticationOptionsRouteHandler: RouteHandler<
  typeof putAuthenticationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
