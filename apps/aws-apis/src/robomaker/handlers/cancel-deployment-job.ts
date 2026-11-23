import type { RouteHandler } from '@hono/zod-openapi'
import type { postCancelDeploymentJobRoute } from '../routes'

export const postCancelDeploymentJobRouteHandler: RouteHandler<
  typeof postCancelDeploymentJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
