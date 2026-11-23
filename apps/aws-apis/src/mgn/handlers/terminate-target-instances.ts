import type { RouteHandler } from '@hono/zod-openapi'
import type { postTerminateTargetInstancesRoute } from '../routes'

export const postTerminateTargetInstancesRouteHandler: RouteHandler<
  typeof postTerminateTargetInstancesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
