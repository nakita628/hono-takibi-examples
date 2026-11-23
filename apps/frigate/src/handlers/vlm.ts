import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteVlmMonitorRoute, getVlmMonitorRoute, postVlmMonitorRoute } from '../routes'

export const postVlmMonitorRouteHandler: RouteHandler<typeof postVlmMonitorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getVlmMonitorRouteHandler: RouteHandler<typeof getVlmMonitorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVlmMonitorRouteHandler: RouteHandler<typeof deleteVlmMonitorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
