import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasSettingsValkeyRoute } from '../routes'

export const getDbaasSettingsValkeyRouteHandler: RouteHandler<
  typeof getDbaasSettingsValkeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
