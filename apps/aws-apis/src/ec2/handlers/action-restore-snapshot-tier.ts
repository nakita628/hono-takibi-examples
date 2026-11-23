import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRestoreSnapshotTierRoute,
  postActionRestoreSnapshotTierRoute,
} from '../routes'

export const getActionRestoreSnapshotTierRouteHandler: RouteHandler<
  typeof getActionRestoreSnapshotTierRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRestoreSnapshotTierRouteHandler: RouteHandler<
  typeof postActionRestoreSnapshotTierRoute
> = async (c) => {
  throw new Error('Not implemented')
}
