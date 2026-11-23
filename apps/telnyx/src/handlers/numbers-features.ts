import type { RouteHandler } from '@hono/zod-openapi'
import type { postNumbersFeaturesRoute } from '../routes'

export const postNumbersFeaturesRouteHandler: RouteHandler<
  typeof postNumbersFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
