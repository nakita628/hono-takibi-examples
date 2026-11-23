import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalSettingsRoute, putGlobalSettingsRoute } from '../routes'

export const getGlobalSettingsRouteHandler: RouteHandler<typeof getGlobalSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putGlobalSettingsRouteHandler: RouteHandler<typeof putGlobalSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
