import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionEnableFastSnapshotRestoresRoute,
  postActionEnableFastSnapshotRestoresRoute,
} from '../routes'

export const getActionEnableFastSnapshotRestoresRouteHandler: RouteHandler<
  typeof getActionEnableFastSnapshotRestoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionEnableFastSnapshotRestoresRouteHandler: RouteHandler<
  typeof postActionEnableFastSnapshotRestoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}
