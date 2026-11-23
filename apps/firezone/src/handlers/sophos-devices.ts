import type { RouteHandler } from '@hono/zod-openapi'
import type { getSophosDevicesIdRoute, getSophosDevicesRoute } from '../routes'

export const getSophosDevicesIdRouteHandler: RouteHandler<typeof getSophosDevicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSophosDevicesRouteHandler: RouteHandler<typeof getSophosDevicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
