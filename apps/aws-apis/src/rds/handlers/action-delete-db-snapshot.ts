import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteDBSnapshotRoute, postActionDeleteDBSnapshotRoute } from '../routes'

export const getActionDeleteDBSnapshotRouteHandler: RouteHandler<
  typeof getActionDeleteDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDBSnapshotRouteHandler: RouteHandler<
  typeof postActionDeleteDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
