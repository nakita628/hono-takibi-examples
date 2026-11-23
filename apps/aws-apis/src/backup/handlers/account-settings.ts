import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountSettingsRoute, putAccountSettingsRoute } from '../routes'

export const getAccountSettingsRouteHandler: RouteHandler<typeof getAccountSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putAccountSettingsRouteHandler: RouteHandler<typeof putAccountSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
