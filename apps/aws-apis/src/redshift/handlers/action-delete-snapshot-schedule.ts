import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteSnapshotScheduleRoute,
  postActionDeleteSnapshotScheduleRoute,
} from '../routes'

export const getActionDeleteSnapshotScheduleRouteHandler: RouteHandler<
  typeof getActionDeleteSnapshotScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSnapshotScheduleRouteHandler: RouteHandler<
  typeof postActionDeleteSnapshotScheduleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
