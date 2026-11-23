import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionSetQueueAttributesRoute } from '../routes'

export const postActionSetQueueAttributesRouteHandler: RouteHandler<
  typeof postActionSetQueueAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
