import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDBClusterSnapshotRoute,
  postActionCreateDBClusterSnapshotRoute,
} from '../routes'

export const getActionCreateDBClusterSnapshotRouteHandler: RouteHandler<
  typeof getActionCreateDBClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDBClusterSnapshotRouteHandler: RouteHandler<
  typeof postActionCreateDBClusterSnapshotRoute
> = async (c) => {
  throw new Error('Not implemented')
}
