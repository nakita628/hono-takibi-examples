import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionEnableSnapshotCopyRoute, postActionEnableSnapshotCopyRoute } from '../routes'

export const getActionEnableSnapshotCopyRouteHandler: RouteHandler<
  typeof getActionEnableSnapshotCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableSnapshotCopyRouteHandler: RouteHandler<
  typeof postActionEnableSnapshotCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
