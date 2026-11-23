import type { RouteHandler } from '@hono/zod-openapi'
import type { postEditMessageLiveLocationRoute } from '../routes'

export const postEditMessageLiveLocationRouteHandler: RouteHandler<
  typeof postEditMessageLiveLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
