import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsPublicRoute, getSettingsRoute, putSettingsRoute } from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSettingsRouteHandler: RouteHandler<typeof putSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSettingsPublicRouteHandler: RouteHandler<typeof getSettingsPublicRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
