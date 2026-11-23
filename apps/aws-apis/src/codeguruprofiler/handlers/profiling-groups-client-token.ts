import type { RouteHandler } from '@hono/zod-openapi'
import type { postProfilingGroupsClientTokenRoute } from '../routes'

export const postProfilingGroupsClientTokenRouteHandler: RouteHandler<
  typeof postProfilingGroupsClientTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
