import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteRecordingConfigurationRoute } from '../routes'

export const postDeleteRecordingConfigurationRouteHandler: RouteHandler<
  typeof postDeleteRecordingConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
