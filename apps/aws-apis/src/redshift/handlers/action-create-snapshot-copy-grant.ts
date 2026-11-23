import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateSnapshotCopyGrantRoute,
  postActionCreateSnapshotCopyGrantRoute,
} from '../routes'

export const getActionCreateSnapshotCopyGrantRouteHandler: RouteHandler<
  typeof getActionCreateSnapshotCopyGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateSnapshotCopyGrantRouteHandler: RouteHandler<
  typeof postActionCreateSnapshotCopyGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}
