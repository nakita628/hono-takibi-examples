import type { RouteHandler } from '@hono/zod-openapi'
import type { postListRecordingConfigurationsRoute } from '../routes'

export const postListRecordingConfigurationsRouteHandler: RouteHandler<
  typeof postListRecordingConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
