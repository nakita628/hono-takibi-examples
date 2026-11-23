import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasSettingsPgRoute } from '../routes'

export const getDbaasSettingsPgRouteHandler: RouteHandler<typeof getDbaasSettingsPgRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
