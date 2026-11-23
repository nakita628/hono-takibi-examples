import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeConfigurationSetRoute,
  postActionDescribeConfigurationSetRoute,
} from '../routes'

export const getActionDescribeConfigurationSetRouteHandler: RouteHandler<
  typeof getActionDescribeConfigurationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeConfigurationSetRouteHandler: RouteHandler<
  typeof postActionDescribeConfigurationSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
