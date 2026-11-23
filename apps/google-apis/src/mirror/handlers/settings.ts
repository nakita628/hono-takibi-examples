import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsIdRoute } from '../routes'

export const getSettingsIdRouteHandler: RouteHandler<typeof getSettingsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
