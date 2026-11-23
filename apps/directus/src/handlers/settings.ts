import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsRoute, patchSettingsRoute } from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSettingsRouteHandler: RouteHandler<typeof patchSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
