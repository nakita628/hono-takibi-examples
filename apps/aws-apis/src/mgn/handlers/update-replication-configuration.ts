import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateReplicationConfigurationRoute } from '../routes'

export const postUpdateReplicationConfigurationRouteHandler: RouteHandler<
  typeof postUpdateReplicationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
