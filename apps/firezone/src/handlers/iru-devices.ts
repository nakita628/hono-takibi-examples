import type { RouteHandler } from '@hono/zod-openapi'
import type { getIruDevicesIdRoute, getIruDevicesRoute } from '../routes'

export const getIruDevicesIdRouteHandler: RouteHandler<typeof getIruDevicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getIruDevicesRouteHandler: RouteHandler<typeof getIruDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}
