import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteDevicesRoute, getDevicesRoute, postDevicesRoute } from '../routes'

export const deleteDevicesRouteHandler: RouteHandler<typeof deleteDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesRouteHandler: RouteHandler<typeof getDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesRouteHandler: RouteHandler<typeof postDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}
