import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeWorldTemplateRoute } from '../routes'

export const postDescribeWorldTemplateRouteHandler: RouteHandler<
  typeof postDescribeWorldTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
