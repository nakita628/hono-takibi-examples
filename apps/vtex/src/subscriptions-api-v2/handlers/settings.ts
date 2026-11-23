import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsRoute, postSettingsRoute } from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSettingsRouteHandler: RouteHandler<typeof postSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
