import type { RouteHandler } from '@hono/zod-openapi'
import type { postSingFrameAudioQueryRoute } from '../routes'

export const postSingFrameAudioQueryRouteHandler: RouteHandler<
  typeof postSingFrameAudioQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
