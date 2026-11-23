import type { RouteHandler } from '@hono/zod-openapi'
import type { postEditMessageReplyMarkupRoute } from '../routes'

export const postEditMessageReplyMarkupRouteHandler: RouteHandler<
  typeof postEditMessageReplyMarkupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
