import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsAppIdRoute, getAppsRoute } from '../routes'

export const getAppsRouteHandler: RouteHandler<typeof getAppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsAppIdRouteHandler: RouteHandler<typeof getAppsAppIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
