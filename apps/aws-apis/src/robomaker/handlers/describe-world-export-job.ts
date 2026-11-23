import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeWorldExportJobRoute } from '../routes'

export const postDescribeWorldExportJobRouteHandler: RouteHandler<
  typeof postDescribeWorldExportJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
