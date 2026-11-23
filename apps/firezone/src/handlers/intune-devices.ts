import type { RouteHandler } from '@hono/zod-openapi'
import type { getIntuneDevicesIdRoute, getIntuneDevicesRoute } from '../routes'

export const getIntuneDevicesIdRouteHandler: RouteHandler<typeof getIntuneDevicesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getIntuneDevicesRouteHandler: RouteHandler<typeof getIntuneDevicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
