import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeTransactionRoute } from '../routes'

export const postDescribeTransactionRouteHandler: RouteHandler<
  typeof postDescribeTransactionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
