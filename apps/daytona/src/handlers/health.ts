import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthReadyRoute, getHealthRoute } from '../routes'

export const getHealthRouteHandler: RouteHandler<typeof getHealthRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHealthReadyRouteHandler: RouteHandler<typeof getHealthReadyRoute> = async (c) => {
  throw new Error('Not implemented')
}
