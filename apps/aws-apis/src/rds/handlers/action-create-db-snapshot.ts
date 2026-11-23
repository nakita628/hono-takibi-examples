import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateDBSnapshotRoute, postActionCreateDBSnapshotRoute } from '../routes'

export const getActionCreateDBSnapshotRouteHandler: RouteHandler<
  typeof getActionCreateDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBSnapshotRouteHandler: RouteHandler<
  typeof postActionCreateDBSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
