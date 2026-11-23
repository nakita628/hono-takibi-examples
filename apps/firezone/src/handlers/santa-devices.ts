import type { RouteHandler } from '@hono/zod-openapi'
import type { getSantaDevicesIdRoute, getSantaDevicesRoute } from '../routes'

export const getSantaDevicesRouteHandler: RouteHandler<typeof getSantaDevicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSantaDevicesIdRouteHandler: RouteHandler<typeof getSantaDevicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
