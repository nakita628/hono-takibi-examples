import type { RouteHandler } from '@hono/zod-openapi'
import type { getHealthAliveRoute, getHealthReadyRoute } from '../routes'

export const getHealthAliveRouteHandler: RouteHandler<typeof getHealthAliveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHealthReadyRouteHandler: RouteHandler<typeof getHealthReadyRoute> = async (c) => {
  throw new Error('Not implemented')
}
