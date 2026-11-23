import type { RouteHandler } from '@hono/zod-openapi'
import type { postYourPullDOCRequestAPIPathRoute } from '../routes'

export const postYourPullDOCRequestAPIPathRouteHandler: RouteHandler<
  typeof postYourPullDOCRequestAPIPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
