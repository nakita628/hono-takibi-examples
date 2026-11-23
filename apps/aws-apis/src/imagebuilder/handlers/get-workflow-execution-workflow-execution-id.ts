import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetWorkflowExecutionWorkflowExecutionIdRoute } from '../routes'

export const getGetWorkflowExecutionWorkflowExecutionIdRouteHandler: RouteHandler<
  typeof getGetWorkflowExecutionWorkflowExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
