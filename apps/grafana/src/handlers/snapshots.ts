import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteSnapshotsKeyRoute, getSnapshotsKeyRoute, postSnapshotsRoute } from '../routes'

export const postSnapshotsRouteHandler: RouteHandler<typeof postSnapshotsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSnapshotsKeyRouteHandler: RouteHandler<typeof deleteSnapshotsKeyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSnapshotsKeyRouteHandler: RouteHandler<typeof getSnapshotsKeyRoute> = async (c) => {
  throw new Error('Not implemented')
}
