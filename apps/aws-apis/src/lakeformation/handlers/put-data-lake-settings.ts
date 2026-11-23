import type { RouteHandler } from '@hono/zod-openapi'
import type { postPutDataLakeSettingsRoute } from '../routes'

export const postPutDataLakeSettingsRouteHandler: RouteHandler<
  typeof postPutDataLakeSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
