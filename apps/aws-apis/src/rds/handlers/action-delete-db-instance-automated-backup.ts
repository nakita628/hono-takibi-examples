import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBInstanceAutomatedBackupRoute,
  postActionDeleteDBInstanceAutomatedBackupRoute,
} from '../routes'

export const getActionDeleteDBInstanceAutomatedBackupRouteHandler: RouteHandler<
  typeof getActionDeleteDBInstanceAutomatedBackupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBInstanceAutomatedBackupRouteHandler: RouteHandler<
  typeof postActionDeleteDBInstanceAutomatedBackupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
