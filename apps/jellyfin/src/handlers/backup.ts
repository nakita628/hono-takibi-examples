import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBackupManifestRoute,
  getBackupRoute,
  postBackupCreateRoute,
  postBackupRestoreRoute,
} from '../routes'

export const getBackupRouteHandler: RouteHandler<typeof getBackupRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBackupCreateRouteHandler: RouteHandler<typeof postBackupCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBackupManifestRouteHandler: RouteHandler<typeof getBackupManifestRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postBackupRestoreRouteHandler: RouteHandler<typeof postBackupRestoreRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
