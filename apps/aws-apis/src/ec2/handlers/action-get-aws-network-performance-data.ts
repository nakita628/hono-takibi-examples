import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetAwsNetworkPerformanceDataRoute,
  postActionGetAwsNetworkPerformanceDataRoute,
} from '../routes'

export const getActionGetAwsNetworkPerformanceDataRouteHandler: RouteHandler<
  typeof getActionGetAwsNetworkPerformanceDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetAwsNetworkPerformanceDataRouteHandler: RouteHandler<
  typeof postActionGetAwsNetworkPerformanceDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
