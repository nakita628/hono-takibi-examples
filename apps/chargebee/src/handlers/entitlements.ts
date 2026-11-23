import type { RouteHandler } from '@hono/zod-openapi'
import type { getEntitlementsRoute, postEntitlementsRoute } from '../routes'

export const getEntitlementsRouteHandler: RouteHandler<typeof getEntitlementsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEntitlementsRouteHandler: RouteHandler<typeof postEntitlementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
