import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSnapshotSchedulesRoute,
  postActionDescribeSnapshotSchedulesRoute,
} from '../routes'

export const getActionDescribeSnapshotSchedulesRouteHandler: RouteHandler<
  typeof getActionDescribeSnapshotSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSnapshotSchedulesRouteHandler: RouteHandler<
  typeof postActionDescribeSnapshotSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
