import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionImportSnapshotRoute, postActionImportSnapshotRoute } from '../routes'

export const getActionImportSnapshotRouteHandler: RouteHandler<
  typeof getActionImportSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionImportSnapshotRouteHandler: RouteHandler<
  typeof postActionImportSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
