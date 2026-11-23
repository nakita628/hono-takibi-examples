import type { RouteHandler } from '@hono/zod-openapi'
import type { getWorkflowsStepFailedRoute } from '../routes'

export const getWorkflowsStepFailedRouteHandler: RouteHandler<
  typeof getWorkflowsStepFailedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
