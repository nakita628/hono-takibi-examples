import type { RouteHandler } from '@hono/zod-openapi'
import type { postListDeploymentJobsRoute } from '../routes'

export const postListDeploymentJobsRouteHandler: RouteHandler<
  typeof postListDeploymentJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
