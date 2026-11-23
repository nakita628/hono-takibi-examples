import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStackInstanceRoute,
  postActionDescribeStackInstanceRoute,
} from '../routes'

export const getActionDescribeStackInstanceRouteHandler: RouteHandler<
  typeof getActionDescribeStackInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStackInstanceRouteHandler: RouteHandler<
  typeof postActionDescribeStackInstanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
