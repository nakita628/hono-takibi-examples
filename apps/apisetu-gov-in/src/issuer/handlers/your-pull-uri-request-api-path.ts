import type { RouteHandler } from '@hono/zod-openapi'
import type { postYourPullURIRequestAPIPathRoute } from '../routes'

export const postYourPullURIRequestAPIPathRouteHandler: RouteHandler<
  typeof postYourPullURIRequestAPIPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}
