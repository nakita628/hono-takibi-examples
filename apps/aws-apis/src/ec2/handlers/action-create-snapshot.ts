import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateSnapshotRoute, postActionCreateSnapshotRoute } from '../routes'

export const getActionCreateSnapshotRouteHandler: RouteHandler<
  typeof getActionCreateSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSnapshotRouteHandler: RouteHandler<
  typeof postActionCreateSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
