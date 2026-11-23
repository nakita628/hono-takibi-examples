import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateDeploymentJobRoute } from '../routes'

export const postCreateDeploymentJobRouteHandler: RouteHandler<
  typeof postCreateDeploymentJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
