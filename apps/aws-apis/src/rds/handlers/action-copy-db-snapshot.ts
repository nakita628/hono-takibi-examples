import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCopyDBSnapshotRoute, postActionCopyDBSnapshotRoute } from '../routes'

export const getActionCopyDBSnapshotRouteHandler: RouteHandler<
  typeof getActionCopyDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCopyDBSnapshotRouteHandler: RouteHandler<
  typeof postActionCopyDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
