import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteDBClusterAutomatedBackupRoute,
  postActionDeleteDBClusterAutomatedBackupRoute,
} from '../routes'

export const getActionDeleteDBClusterAutomatedBackupRouteHandler: RouteHandler<
  typeof getActionDeleteDBClusterAutomatedBackupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBClusterAutomatedBackupRouteHandler: RouteHandler<
  typeof postActionDeleteDBClusterAutomatedBackupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
