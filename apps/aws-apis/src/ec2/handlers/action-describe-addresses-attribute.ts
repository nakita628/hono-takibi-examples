import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeAddressesAttributeRoute,
  postActionDescribeAddressesAttributeRoute,
} from '../routes'

export const getActionDescribeAddressesAttributeRouteHandler: RouteHandler<
  typeof getActionDescribeAddressesAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeAddressesAttributeRouteHandler: RouteHandler<
  typeof postActionDescribeAddressesAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
