import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStackDriftDetectionStatusRoute,
  postActionDescribeStackDriftDetectionStatusRoute,
} from '../routes'

export const getActionDescribeStackDriftDetectionStatusRouteHandler: RouteHandler<
  typeof getActionDescribeStackDriftDetectionStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStackDriftDetectionStatusRouteHandler: RouteHandler<
  typeof postActionDescribeStackDriftDetectionStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
