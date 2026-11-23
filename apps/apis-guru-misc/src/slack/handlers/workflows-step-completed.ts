import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkflowsStepCompletedRoute } from '../routes'

export const getWorkflowsStepCompletedRouteHandler: RouteHandler<
  typeof getWorkflowsStepCompletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
