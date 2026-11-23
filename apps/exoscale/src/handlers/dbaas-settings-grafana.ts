import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasSettingsGrafanaRoute } from '../routes'

export const getDbaasSettingsGrafanaRouteHandler: RouteHandler<
  typeof getDbaasSettingsGrafanaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
