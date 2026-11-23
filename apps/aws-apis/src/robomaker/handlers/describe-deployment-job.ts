import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeDeploymentJobRoute } from '../routes'

export const postDescribeDeploymentJobRouteHandler: RouteHandler<
  typeof postDescribeDeploymentJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
