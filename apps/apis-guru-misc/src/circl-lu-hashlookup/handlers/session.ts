import type { RouteHandler } from '@hono/zod-openapi'
import type { getSessionCreateNameRoute, getSessionGetNameRoute } from '../routes'

export const getSessionCreateNameRouteHandler: RouteHandler<
  typeof getSessionCreateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionGetNameRouteHandler: RouteHandler<typeof getSessionGetNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
