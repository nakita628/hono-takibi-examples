import type { RouteHandler } from '@hono/zod-openapi'
import type { postTopLevelObjectOfEverythingRoute } from '../routes'

export const postTopLevelObjectOfEverythingRouteHandler: RouteHandler<
  typeof postTopLevelObjectOfEverythingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
