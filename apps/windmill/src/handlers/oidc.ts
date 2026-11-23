import type { RouteHandler } from '@hono/zod-openapi'
import type { getOidcSigningStatusRoute } from '../routes'

export const getOidcSigningStatusRouteHandler: RouteHandler<
  typeof getOidcSigningStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
