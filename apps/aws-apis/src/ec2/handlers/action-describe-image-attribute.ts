import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeImageAttributeRoute,
  postActionDescribeImageAttributeRoute,
} from '../routes'

export const getActionDescribeImageAttributeRouteHandler: RouteHandler<
  typeof getActionDescribeImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeImageAttributeRouteHandler: RouteHandler<
  typeof postActionDescribeImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
