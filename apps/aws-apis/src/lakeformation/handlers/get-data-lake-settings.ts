import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetDataLakeSettingsRoute } from '../routes'

export const postGetDataLakeSettingsRouteHandler: RouteHandler<
  typeof postGetDataLakeSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
