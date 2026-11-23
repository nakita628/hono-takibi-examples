import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAdjustmentTypesRoute,
  postActionDescribeAdjustmentTypesRoute,
} from '../routes'

export const getActionDescribeAdjustmentTypesRouteHandler: RouteHandler<
  typeof getActionDescribeAdjustmentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAdjustmentTypesRouteHandler: RouteHandler<
  typeof postActionDescribeAdjustmentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
