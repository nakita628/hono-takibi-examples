import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyDBSnapshotRoute, postActionModifyDBSnapshotRoute } from '../routes'

export const getActionModifyDBSnapshotRouteHandler: RouteHandler<
  typeof getActionModifyDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBSnapshotRouteHandler: RouteHandler<
  typeof postActionModifyDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
