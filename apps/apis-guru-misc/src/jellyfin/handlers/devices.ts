import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDevicesRoute,
  getDevicesInfoRoute,
  getDevicesOptionsRoute,
  getDevicesRoute,
  postDevicesOptionsRoute,
} from '../routes'

export const deleteDevicesRouteHandler: RouteHandler<typeof deleteDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesRouteHandler: RouteHandler<typeof getDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesInfoRouteHandler: RouteHandler<typeof getDevicesInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDevicesOptionsRouteHandler: RouteHandler<typeof getDevicesOptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postDevicesOptionsRouteHandler: RouteHandler<typeof postDevicesOptionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
