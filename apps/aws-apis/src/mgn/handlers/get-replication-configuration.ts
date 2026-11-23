import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetReplicationConfigurationRoute } from '../routes'

export const postGetReplicationConfigurationRouteHandler: RouteHandler<
  typeof postGetReplicationConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
