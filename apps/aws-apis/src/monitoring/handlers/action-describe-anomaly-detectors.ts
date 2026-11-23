import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAnomalyDetectorsRoute,
  postActionDescribeAnomalyDetectorsRoute,
} from '../routes'

export const getActionDescribeAnomalyDetectorsRouteHandler: RouteHandler<
  typeof getActionDescribeAnomalyDetectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAnomalyDetectorsRouteHandler: RouteHandler<
  typeof postActionDescribeAnomalyDetectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
