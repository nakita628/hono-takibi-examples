import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateSnapshotScheduleRoute,
  postActionCreateSnapshotScheduleRoute,
} from '../routes'

export const getActionCreateSnapshotScheduleRouteHandler: RouteHandler<
  typeof getActionCreateSnapshotScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSnapshotScheduleRouteHandler: RouteHandler<
  typeof postActionCreateSnapshotScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
