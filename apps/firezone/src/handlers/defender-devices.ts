import type { RouteHandler } from '@hono/zod-openapi'
import type { getDefenderDevicesDefenderDeviceRoute, getDefenderDevicesRoute } from '../routes'

export const getDefenderDevicesRouteHandler: RouteHandler<typeof getDefenderDevicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDefenderDevicesDefenderDeviceRouteHandler: RouteHandler<
  typeof getDefenderDevicesDefenderDeviceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
