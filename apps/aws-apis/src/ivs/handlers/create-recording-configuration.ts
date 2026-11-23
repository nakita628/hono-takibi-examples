import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateRecordingConfigurationRoute } from '../routes'

export const postCreateRecordingConfigurationRouteHandler: RouteHandler<
  typeof postCreateRecordingConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
