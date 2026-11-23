import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsIDRoute, getAppsRoute } from '../routes'

export const getAppsRouteHandler: RouteHandler<typeof getAppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsIDRouteHandler: RouteHandler<typeof getAppsIDRoute> = async (c) => {
  throw new Error('Not implemented')
}
