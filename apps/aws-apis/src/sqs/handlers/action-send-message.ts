import type { RouteHandler } from '@hono/zod-openapi'
import type { postActionSendMessageRoute } from '../routes'

export const postActionSendMessageRouteHandler: RouteHandler<
  typeof postActionSendMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
