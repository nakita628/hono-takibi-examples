import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetWorkflowStepExecutionStepExecutionIdRoute } from '../routes'

export const getGetWorkflowStepExecutionStepExecutionIdRouteHandler: RouteHandler<
  typeof getGetWorkflowStepExecutionStepExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
