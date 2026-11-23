import type { RouteHandler } from '@hono/zod-openapi'
import type { getResponseHeadersRoute, postResponseHeadersRoute } from '../routes'

export const getResponseHeadersRouteHandler: RouteHandler<typeof getResponseHeadersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postResponseHeadersRouteHandler: RouteHandler<
  typeof postResponseHeadersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
