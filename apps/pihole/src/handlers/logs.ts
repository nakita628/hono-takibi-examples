import type { RouteHandler } from '@hono/zod-openapi'
import type { getLogsDnsmasqRoute, getLogsFtlRoute, getLogsWebserverRoute } from '../routes'

export const getLogsDnsmasqRouteHandler: RouteHandler<typeof getLogsDnsmasqRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsFtlRouteHandler: RouteHandler<typeof getLogsFtlRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLogsWebserverRouteHandler: RouteHandler<typeof getLogsWebserverRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
