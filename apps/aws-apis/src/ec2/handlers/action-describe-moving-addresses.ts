import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeMovingAddressesRoute,
  postActionDescribeMovingAddressesRoute,
} from '../routes'

export const getActionDescribeMovingAddressesRouteHandler: RouteHandler<
  typeof getActionDescribeMovingAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeMovingAddressesRouteHandler: RouteHandler<
  typeof postActionDescribeMovingAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
