import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNodeConfigurationOptionsRoute,
  postActionDescribeNodeConfigurationOptionsRoute,
} from '../routes'

export const getActionDescribeNodeConfigurationOptionsRouteHandler: RouteHandler<
  typeof getActionDescribeNodeConfigurationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNodeConfigurationOptionsRouteHandler: RouteHandler<
  typeof postActionDescribeNodeConfigurationOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
