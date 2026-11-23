import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionStartDBInstanceAutomatedBackupsReplicationRoute,
  postActionStartDBInstanceAutomatedBackupsReplicationRoute,
} from '../routes'

export const getActionStartDBInstanceAutomatedBackupsReplicationRouteHandler: RouteHandler<
  typeof getActionStartDBInstanceAutomatedBackupsReplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartDBInstanceAutomatedBackupsReplicationRouteHandler: RouteHandler<
  typeof postActionStartDBInstanceAutomatedBackupsReplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
