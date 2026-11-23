import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableSnapshotCopyRoute,
  postActionDisableSnapshotCopyRoute,
} from '../routes'

export const getActionDisableSnapshotCopyRouteHandler: RouteHandler<
  typeof getActionDisableSnapshotCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableSnapshotCopyRouteHandler: RouteHandler<
  typeof postActionDisableSnapshotCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
