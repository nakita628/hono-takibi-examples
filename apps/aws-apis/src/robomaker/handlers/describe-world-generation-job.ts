import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeWorldGenerationJobRoute } from '../routes'

export const postDescribeWorldGenerationJobRouteHandler: RouteHandler<
  typeof postDescribeWorldGenerationJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
