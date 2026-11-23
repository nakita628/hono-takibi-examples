import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeImagesRoute, postActionDescribeImagesRoute } from '../routes'

export const getActionDescribeImagesRouteHandler: RouteHandler<
  typeof getActionDescribeImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeImagesRouteHandler: RouteHandler<
  typeof postActionDescribeImagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
