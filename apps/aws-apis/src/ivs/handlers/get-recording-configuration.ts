import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetRecordingConfigurationRoute } from '../routes'

export const postGetRecordingConfigurationRouteHandler: RouteHandler<
  typeof postGetRecordingConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
