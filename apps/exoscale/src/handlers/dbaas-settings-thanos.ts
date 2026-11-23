import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasSettingsThanosRoute } from '../routes'

export const getDbaasSettingsThanosRouteHandler: RouteHandler<
  typeof getDbaasSettingsThanosRoute
> = async (c) => {
  throw new Error('Not implemented')
}
