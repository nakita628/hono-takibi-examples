import type { RouteHandler } from '@hono/zod-openapi'
import type { postStopMessageLiveLocationRoute } from '../routes'

export const postStopMessageLiveLocationRouteHandler: RouteHandler<
  typeof postStopMessageLiveLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
