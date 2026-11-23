import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasSettingsOpensearchRoute } from '../routes'

export const getDbaasSettingsOpensearchRouteHandler: RouteHandler<
  typeof getDbaasSettingsOpensearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
