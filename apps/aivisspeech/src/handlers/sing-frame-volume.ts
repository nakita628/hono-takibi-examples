import type { RouteHandler } from '@hono/zod-openapi'
import type { postSingFrameVolumeRoute } from '../routes'

export const postSingFrameVolumeRouteHandler: RouteHandler<
  typeof postSingFrameVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
