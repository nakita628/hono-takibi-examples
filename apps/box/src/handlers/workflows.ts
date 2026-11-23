import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkflowsRoute, postWorkflowsWorkflowIdStartRoute } from '../routes'

export const getWorkflowsRouteHandler: RouteHandler<typeof getWorkflowsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowsWorkflowIdStartRouteHandler: RouteHandler<
  typeof postWorkflowsWorkflowIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}
