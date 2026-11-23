import type { RouteHandler } from '@hono/zod-openapi'
import type { getConfigLogsRoute, getConfigRoute, postConfigRoute } from '../routes'

export const getConfigRouteHandler: RouteHandler<typeof getConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postConfigRouteHandler: RouteHandler<typeof postConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigLogsRouteHandler: RouteHandler<typeof getConfigLogsRoute> = async (c) => {
  throw new Error('Not implemented')
}
