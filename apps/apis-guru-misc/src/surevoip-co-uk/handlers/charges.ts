import type { RouteHandler } from '@hono/zod-openapi'
import type { getChargesRoute, postChargesRoute } from '../routes'

export const getChargesRouteHandler: RouteHandler<typeof getChargesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChargesRouteHandler: RouteHandler<typeof postChargesRoute> = async (c) => {
  throw new Error('Not implemented')
}
