import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateMediaStorageConfigurationRoute } from '../routes'

export const postUpdateMediaStorageConfigurationRouteHandler: RouteHandler<
  typeof postUpdateMediaStorageConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
