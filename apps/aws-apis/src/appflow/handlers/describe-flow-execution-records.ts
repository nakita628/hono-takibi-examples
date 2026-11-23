import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeFlowExecutionRecordsRoute } from '../routes'

export const postDescribeFlowExecutionRecordsRouteHandler: RouteHandler<
  typeof postDescribeFlowExecutionRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
