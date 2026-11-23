import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBlockStorageSnapshotIdRoute,
  getBlockStorageSnapshotIdRoute,
  getBlockStorageSnapshotRoute,
  putBlockStorageSnapshotIdRoute,
} from '../routes'

export const deleteBlockStorageSnapshotIdRouteHandler: RouteHandler<
  typeof deleteBlockStorageSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBlockStorageSnapshotIdRouteHandler: RouteHandler<
  typeof putBlockStorageSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlockStorageSnapshotIdRouteHandler: RouteHandler<
  typeof getBlockStorageSnapshotIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBlockStorageSnapshotRouteHandler: RouteHandler<
  typeof getBlockStorageSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
