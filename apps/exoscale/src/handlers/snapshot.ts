import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSnapshotIdRoute,
  getSnapshotIdRoute,
  getSnapshotRoute,
  postSnapshotIdExportRoute,
  postSnapshotIdPromoteRoute,
} from '../routes'

export const postSnapshotIdExportRouteHandler: RouteHandler<
  typeof postSnapshotIdExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSnapshotIdRouteHandler: RouteHandler<typeof deleteSnapshotIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSnapshotIdRouteHandler: RouteHandler<typeof getSnapshotIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSnapshotRouteHandler: RouteHandler<typeof getSnapshotRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSnapshotIdPromoteRouteHandler: RouteHandler<
  typeof postSnapshotIdPromoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
