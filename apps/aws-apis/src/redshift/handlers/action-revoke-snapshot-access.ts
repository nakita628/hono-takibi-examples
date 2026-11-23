import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRevokeSnapshotAccessRoute,
  postActionRevokeSnapshotAccessRoute,
} from '../routes'

export const getActionRevokeSnapshotAccessRouteHandler: RouteHandler<
  typeof getActionRevokeSnapshotAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRevokeSnapshotAccessRouteHandler: RouteHandler<
  typeof postActionRevokeSnapshotAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
