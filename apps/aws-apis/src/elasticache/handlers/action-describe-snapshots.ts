import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeSnapshotsRoute, postActionDescribeSnapshotsRoute } from '../routes'

export const getActionDescribeSnapshotsRouteHandler: RouteHandler<
  typeof getActionDescribeSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSnapshotsRouteHandler: RouteHandler<
  typeof postActionDescribeSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
