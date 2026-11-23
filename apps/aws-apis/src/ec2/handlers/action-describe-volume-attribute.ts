import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVolumeAttributeRoute,
  postActionDescribeVolumeAttributeRoute,
} from '../routes'

export const getActionDescribeVolumeAttributeRouteHandler: RouteHandler<
  typeof getActionDescribeVolumeAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVolumeAttributeRouteHandler: RouteHandler<
  typeof postActionDescribeVolumeAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
