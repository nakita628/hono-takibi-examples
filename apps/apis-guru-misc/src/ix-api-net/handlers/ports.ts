import type { RouteHandler } from '@hono/zod-openapi'
import type { getPortsIdRoute, getPortsRoute } from '../routes'

export const getPortsRouteHandler: RouteHandler<typeof getPortsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPortsIdRouteHandler: RouteHandler<typeof getPortsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
