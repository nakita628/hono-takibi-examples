import type { RouteHandler } from '@hono/zod-openapi'
import type { postSyncDeploymentJobRoute } from '../routes'

export const postSyncDeploymentJobRouteHandler: RouteHandler<
  typeof postSyncDeploymentJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
