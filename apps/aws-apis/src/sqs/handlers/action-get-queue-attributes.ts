import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionGetQueueAttributesRoute } from '../routes'

export const postActionGetQueueAttributesRouteHandler: RouteHandler<
  typeof postActionGetQueueAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
