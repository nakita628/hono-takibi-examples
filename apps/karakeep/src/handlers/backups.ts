import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBackupsBackupIdRoute,
  getBackupsBackupIdDownloadRoute,
  getBackupsBackupIdRoute,
  getBackupsRoute,
  postBackupsRoute,
} from '../routes'

export const getBackupsRouteHandler: RouteHandler<typeof getBackupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBackupsRouteHandler: RouteHandler<typeof postBackupsRoute> = async (c) => {
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

export const getBackupsBackupIdDownloadRouteHandler: RouteHandler<
  typeof getBackupsBackupIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
