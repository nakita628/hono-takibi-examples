import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsRoute } from '../routes'

export const getSettingsRouteHandler: RouteHandler<typeof getSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
