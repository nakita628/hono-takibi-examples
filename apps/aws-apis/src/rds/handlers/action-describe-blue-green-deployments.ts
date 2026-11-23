import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeBlueGreenDeploymentsRoute,
  postActionDescribeBlueGreenDeploymentsRoute,
} from '../routes'

export const getActionDescribeBlueGreenDeploymentsRouteHandler: RouteHandler<
  typeof getActionDescribeBlueGreenDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeBlueGreenDeploymentsRouteHandler: RouteHandler<
  typeof postActionDescribeBlueGreenDeploymentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
