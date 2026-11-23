import type { RouteHandler } from '@hono/zod-openapi'
import type { getDeviceItemIdRoute, getDeviceRoute } from '../routes'

export const getDeviceItemIdRouteHandler: RouteHandler<typeof getDeviceItemIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDeviceRouteHandler: RouteHandler<typeof getDeviceRoute> = async (c) => {
  throw new Error('Not implemented')
}
