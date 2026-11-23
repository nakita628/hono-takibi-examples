import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreDBInstanceFromDBSnapshotRoute,
  postActionRestoreDBInstanceFromDBSnapshotRoute,
} from '../routes'

export const getActionRestoreDBInstanceFromDBSnapshotRouteHandler: RouteHandler<
  typeof getActionRestoreDBInstanceFromDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreDBInstanceFromDBSnapshotRouteHandler: RouteHandler<
  typeof postActionRestoreDBInstanceFromDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
