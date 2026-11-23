import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeFastSnapshotRestoresRoute,
  postActionDescribeFastSnapshotRestoresRoute,
} from '../routes'

export const getActionDescribeFastSnapshotRestoresRouteHandler: RouteHandler<
  typeof getActionDescribeFastSnapshotRestoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeFastSnapshotRestoresRouteHandler: RouteHandler<
  typeof postActionDescribeFastSnapshotRestoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}
