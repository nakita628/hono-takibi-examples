import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifySnapshotScheduleRoute,
  postActionModifySnapshotScheduleRoute,
} from '../routes'

export const getActionModifySnapshotScheduleRouteHandler: RouteHandler<
  typeof getActionModifySnapshotScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifySnapshotScheduleRouteHandler: RouteHandler<
  typeof postActionModifySnapshotScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
