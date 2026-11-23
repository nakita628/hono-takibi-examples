import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListSnapshotsInRecycleBinRoute,
  postActionListSnapshotsInRecycleBinRoute,
} from '../routes'

export const getActionListSnapshotsInRecycleBinRouteHandler: RouteHandler<
  typeof getActionListSnapshotsInRecycleBinRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListSnapshotsInRecycleBinRouteHandler: RouteHandler<
  typeof postActionListSnapshotsInRecycleBinRoute
> = async (c) => {
  throw new Error('Not implemented')
}
