import type { RouteHandler } from '@hono/zod-openapi'
import type { getAppsHubGetIdRoute, getAppsHubGetRawIdRoute, getAppsHubListRoute } from '../routes'

export const getAppsHubListRouteHandler: RouteHandler<typeof getAppsHubListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsHubGetIdRouteHandler: RouteHandler<typeof getAppsHubGetIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAppsHubGetRawIdRouteHandler: RouteHandler<typeof getAppsHubGetRawIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
