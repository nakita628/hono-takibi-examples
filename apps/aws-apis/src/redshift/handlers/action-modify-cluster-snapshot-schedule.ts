import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyClusterSnapshotScheduleRoute,
  postActionModifyClusterSnapshotScheduleRoute,
} from '../routes'

export const getActionModifyClusterSnapshotScheduleRouteHandler: RouteHandler<
  typeof getActionModifyClusterSnapshotScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyClusterSnapshotScheduleRouteHandler: RouteHandler<
  typeof postActionModifyClusterSnapshotScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
