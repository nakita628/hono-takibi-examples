import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteSnapshotRoute, postActionDeleteSnapshotRoute } from '../routes'

export const getActionDeleteSnapshotRouteHandler: RouteHandler<
  typeof getActionDeleteSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSnapshotRouteHandler: RouteHandler<
  typeof postActionDeleteSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
