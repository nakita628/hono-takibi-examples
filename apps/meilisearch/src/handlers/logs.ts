import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteLogsStreamRoute, postLogsStderrRoute, postLogsStreamRoute } from '../routes'

export const postLogsStderrRouteHandler: RouteHandler<typeof postLogsStderrRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLogsStreamRouteHandler: RouteHandler<typeof postLogsStreamRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLogsStreamRouteHandler: RouteHandler<typeof deleteLogsStreamRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
