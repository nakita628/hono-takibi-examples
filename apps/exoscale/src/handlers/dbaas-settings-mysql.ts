import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasSettingsMysqlRoute } from '../routes'

export const getDbaasSettingsMysqlRouteHandler: RouteHandler<
  typeof getDbaasSettingsMysqlRoute
> = async (c) => {
  throw new Error('Not implemented')
}
