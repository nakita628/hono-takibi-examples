import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVolumesModificationsRoute,
  postActionDescribeVolumesModificationsRoute,
} from '../routes'

export const getActionDescribeVolumesModificationsRouteHandler: RouteHandler<
  typeof getActionDescribeVolumesModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVolumesModificationsRouteHandler: RouteHandler<
  typeof postActionDescribeVolumesModificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
