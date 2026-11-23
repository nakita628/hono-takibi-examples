import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVolumeStatusRoute,
  postActionDescribeVolumeStatusRoute,
} from '../routes'

export const getActionDescribeVolumeStatusRouteHandler: RouteHandler<
  typeof getActionDescribeVolumeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVolumeStatusRouteHandler: RouteHandler<
  typeof postActionDescribeVolumeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
