import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDisksDiskIdRoute,
  getDisksDiskIdRoute,
  getDisksDiskIdSnapshotsRoute,
  getDisksRoute,
  patchDisksDiskIdRoute,
  postDisksDiskIdSnapshotsRestoreRoute,
  postDisksRoute,
} from '../routes'

export const getDisksRouteHandler: RouteHandler<typeof getDisksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDisksRouteHandler: RouteHandler<typeof postDisksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDisksDiskIdRouteHandler: RouteHandler<typeof getDisksDiskIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDisksDiskIdRouteHandler: RouteHandler<typeof patchDisksDiskIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDisksDiskIdRouteHandler: RouteHandler<typeof deleteDisksDiskIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDisksDiskIdSnapshotsRouteHandler: RouteHandler<
  typeof getDisksDiskIdSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDisksDiskIdSnapshotsRestoreRouteHandler: RouteHandler<
  typeof postDisksDiskIdSnapshotsRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}
