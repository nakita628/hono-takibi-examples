import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifySnapshotTierRoute, postActionModifySnapshotTierRoute } from '../routes'

export const getActionModifySnapshotTierRouteHandler: RouteHandler<
  typeof getActionModifySnapshotTierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifySnapshotTierRouteHandler: RouteHandler<
  typeof postActionModifySnapshotTierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
