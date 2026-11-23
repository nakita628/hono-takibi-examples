import type { RouteHandler } from '@hono/zod-openapi'
import type { postListWorkflowExecutionsRoute } from '../routes'

export const postListWorkflowExecutionsRouteHandler: RouteHandler<
  typeof postListWorkflowExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
