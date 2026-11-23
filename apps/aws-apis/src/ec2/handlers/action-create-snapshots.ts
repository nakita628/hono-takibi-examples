import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateSnapshotsRoute, postActionCreateSnapshotsRoute } from '../routes'

export const getActionCreateSnapshotsRouteHandler: RouteHandler<
  typeof getActionCreateSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSnapshotsRouteHandler: RouteHandler<
  typeof postActionCreateSnapshotsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
