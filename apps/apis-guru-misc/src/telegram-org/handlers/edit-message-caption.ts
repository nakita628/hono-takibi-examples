import type { RouteHandler } from '@hono/zod-openapi'
import type { postEditMessageCaptionRoute } from '../routes'

export const postEditMessageCaptionRouteHandler: RouteHandler<
  typeof postEditMessageCaptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
