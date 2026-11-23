import type { RouteHandler } from '@hono/zod-openapi'
import type { postStopPollRoute } from '../routes'

export const postStopPollRouteHandler: RouteHandler<typeof postStopPollRoute> = async (c) => {
  throw new Error('Not implemented')
}
