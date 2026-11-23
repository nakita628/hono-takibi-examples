import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateClusterSnapshotRoute,
  postActionCreateClusterSnapshotRoute,
} from '../routes'

export const getActionCreateClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionCreateClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionCreateClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
