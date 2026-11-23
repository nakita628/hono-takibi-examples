import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeMetricCollectionTypesRoute,
  postActionDescribeMetricCollectionTypesRoute,
} from '../routes'

export const getActionDescribeMetricCollectionTypesRouteHandler: RouteHandler<
  typeof getActionDescribeMetricCollectionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeMetricCollectionTypesRouteHandler: RouteHandler<
  typeof postActionDescribeMetricCollectionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
