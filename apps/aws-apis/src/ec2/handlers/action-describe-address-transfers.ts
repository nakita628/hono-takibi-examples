import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAddressTransfersRoute,
  postActionDescribeAddressTransfersRoute,
} from '../routes'

export const getActionDescribeAddressTransfersRouteHandler: RouteHandler<
  typeof getActionDescribeAddressTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAddressTransfersRouteHandler: RouteHandler<
  typeof postActionDescribeAddressTransfersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
