import type { RouteHandler } from '@hono/zod-openapi'
import type { postListWorkflowStepExecutionsRoute } from '../routes'

export const postListWorkflowStepExecutionsRouteHandler: RouteHandler<
  typeof postListWorkflowStepExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
