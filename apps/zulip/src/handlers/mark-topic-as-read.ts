import type { RouteHandler } from '@hono/zod-openapi'
import type { postMarkTopicAsReadRoute } from '../routes'

export const postMarkTopicAsReadRouteHandler: RouteHandler<
  typeof postMarkTopicAsReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
