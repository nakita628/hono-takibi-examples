import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionReceiveMessageRoute } from '../routes'

export const postActionReceiveMessageRouteHandler: RouteHandler<
  typeof postActionReceiveMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
