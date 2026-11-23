import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCopySnapshotRoute, postActionCopySnapshotRoute } from '../routes'

export const getActionCopySnapshotRouteHandler: RouteHandler<
  typeof getActionCopySnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCopySnapshotRouteHandler: RouteHandler<
  typeof postActionCopySnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
