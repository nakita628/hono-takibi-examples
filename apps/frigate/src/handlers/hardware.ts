import type { RouteHandler } from '@hono/zod-openapi'
import type { getHardwareHwaccelRoute, getHardwareProbeRoute } from '../routes'

export const getHardwareProbeRouteHandler: RouteHandler<typeof getHardwareProbeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getHardwareHwaccelRouteHandler: RouteHandler<typeof getHardwareHwaccelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
