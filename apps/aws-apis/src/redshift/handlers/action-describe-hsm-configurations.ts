import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeHsmConfigurationsRoute,
  postActionDescribeHsmConfigurationsRoute,
} from '../routes'

export const getActionDescribeHsmConfigurationsRouteHandler: RouteHandler<
  typeof getActionDescribeHsmConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeHsmConfigurationsRouteHandler: RouteHandler<
  typeof postActionDescribeHsmConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
