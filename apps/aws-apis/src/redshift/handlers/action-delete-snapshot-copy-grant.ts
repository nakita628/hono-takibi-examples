import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteSnapshotCopyGrantRoute,
  postActionDeleteSnapshotCopyGrantRoute,
} from '../routes'

export const getActionDeleteSnapshotCopyGrantRouteHandler: RouteHandler<
  typeof getActionDeleteSnapshotCopyGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSnapshotCopyGrantRouteHandler: RouteHandler<
  typeof postActionDeleteSnapshotCopyGrantRoute
> = async (c) => {
  throw new Error('Not implemented')
}
