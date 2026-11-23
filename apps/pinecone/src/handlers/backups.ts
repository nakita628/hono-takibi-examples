import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBackupsBackupIdRoute,
  getBackupsBackupIdRoute,
  getBackupsRoute,
  postBackupsBackupIdCreateIndexRoute,
} from '../routes'

export const getBackupsRouteHandler: RouteHandler<typeof getBackupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBackupsBackupIdRouteHandler: RouteHandler<typeof getBackupsBackupIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteBackupsBackupIdRouteHandler: RouteHandler<
  typeof deleteBackupsBackupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBackupsBackupIdCreateIndexRouteHandler: RouteHandler<
  typeof postBackupsBackupIdCreateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
