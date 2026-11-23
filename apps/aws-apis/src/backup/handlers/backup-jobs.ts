import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBackupJobsBackupJobIdRoute,
  getBackupJobsIndexRoute,
  postBackupJobsBackupJobIdRoute,
  putBackupJobsRoute,
} from '../routes'

export const getBackupJobsBackupJobIdRouteHandler: RouteHandler<
  typeof getBackupJobsBackupJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postBackupJobsBackupJobIdRouteHandler: RouteHandler<
  typeof postBackupJobsBackupJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBackupJobsIndexRouteHandler: RouteHandler<typeof getBackupJobsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBackupJobsRouteHandler: RouteHandler<typeof putBackupJobsRoute> = async (c) => {
  throw new Error('Not implemented')
}
