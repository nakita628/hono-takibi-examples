import type { RouteHandler } from '@hono/zod-openapi'
import type { getDevicesIdIndexRoute, getDevicesIndexRoute, postDevicesIndexRoute } from '../routes'

export const getDevicesIndexRouteHandler: RouteHandler<typeof getDevicesIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicesIndexRouteHandler: RouteHandler<typeof postDevicesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDevicesIdIndexRouteHandler: RouteHandler<typeof getDevicesIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
