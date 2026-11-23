import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeElasticGpusRoute,
  postActionDescribeElasticGpusRoute,
} from '../routes'

export const getActionDescribeElasticGpusRouteHandler: RouteHandler<
  typeof getActionDescribeElasticGpusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeElasticGpusRouteHandler: RouteHandler<
  typeof postActionDescribeElasticGpusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
