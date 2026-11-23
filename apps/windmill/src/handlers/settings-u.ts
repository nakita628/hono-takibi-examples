import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsURuffConfigRoute } from '../routes'

export const getSettingsURuffConfigRouteHandler: RouteHandler<
  typeof getSettingsURuffConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}
