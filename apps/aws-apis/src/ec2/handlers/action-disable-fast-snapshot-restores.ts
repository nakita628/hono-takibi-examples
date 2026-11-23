import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisableFastSnapshotRestoresRoute,
  postActionDisableFastSnapshotRestoresRoute,
} from '../routes'

export const getActionDisableFastSnapshotRestoresRouteHandler: RouteHandler<
  typeof getActionDisableFastSnapshotRestoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisableFastSnapshotRestoresRouteHandler: RouteHandler<
  typeof postActionDisableFastSnapshotRestoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}
