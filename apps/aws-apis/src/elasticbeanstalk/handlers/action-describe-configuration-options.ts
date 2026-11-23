import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeConfigurationOptionsRoute,
  postActionDescribeConfigurationOptionsRoute,
} from '../routes'

export const getActionDescribeConfigurationOptionsRouteHandler: RouteHandler<
  typeof getActionDescribeConfigurationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeConfigurationOptionsRouteHandler: RouteHandler<
  typeof postActionDescribeConfigurationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
