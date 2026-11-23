import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasSettingsClickhouseRoute } from '../routes'

export const getDbaasSettingsClickhouseRouteHandler: RouteHandler<
  typeof getDbaasSettingsClickhouseRoute
> = async (c) => {
  throw new Error('Not implemented')
}
