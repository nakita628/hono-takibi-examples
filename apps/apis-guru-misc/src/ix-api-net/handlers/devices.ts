import type { RouteHandler } from '@hono/zod-openapi'
import type { getDevicesIdRoute, getDevicesRoute } from '../routes'

export const getDevicesRouteHandler: RouteHandler<typeof getDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesIdRouteHandler: RouteHandler<typeof getDevicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
