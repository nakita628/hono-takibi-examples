import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionBatchDescribeTypeConfigurationsRoute,
  postActionBatchDescribeTypeConfigurationsRoute,
} from '../routes'

export const getActionBatchDescribeTypeConfigurationsRouteHandler: RouteHandler<
  typeof getActionBatchDescribeTypeConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionBatchDescribeTypeConfigurationsRouteHandler: RouteHandler<
  typeof postActionBatchDescribeTypeConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
